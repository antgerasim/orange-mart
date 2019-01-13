import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { sign } from "fake-jwt-sign"; // For fakeAuthProvider only
import * as decode from "jwt-decode";

import {
  BehaviorSubject,
  Observable,
  of,
  throwError as observableThrowError
} from "rxjs";
import { catchError, map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { Role } from "./role.enum";
import { transformError } from "../common/common";
import { CacheService } from "./cache.service";

export interface IAuthStatus {
  isAuthenticated: boolean;
  userRole: Role;
  userId: string;
}

interface IServerAuthResponse {
  accessToken: string;
}

const defaultAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: null
};

@Injectable({
  providedIn: "root"
})
export class AuthService extends CacheService {
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;

  authStatus = new BehaviorSubject<IAuthStatus>(
    //defaultAuthStatus
    this.getItem('authStatus') || defaultAuthStatus
  );
  /*When initializing the BehaviorSubject, take care to handle the undefined/null case, when loading data from the cache and still 
  provide a default implementation.*/

  constructor(private httpClient: HttpClient) {
    super();

    this.authStatus.subscribe(authStatus => this.setItem('authStatus', authStatus))
    /*
    The technique demonstrated here can be used to persist any kind of data and intentionally leverages RxJS events to update the cache. 
    As you may note, we don't need to update the login function to call setItem, because it already calls this.authStatus.next, 
    and we just tap in to the data stream. This helps with staying stateless and avoiding side effects, by decoupling functions from each other 
    */
    /*When initializing the BehaviorSubject, take care to handle the undefined/null case, when loading data from the cache and still provide a default implementation.*/


    // Fake login function to simulate roles
    this.authProvider = this.fakeAuthProvider;
    // Example of a real login call to server-side
    // this.authProvider = this.exampleAuthProvider
  }

  /*   private exampleAuthProvider(
      email: string,
      password: string
    ): Observable<IServerAuthResponse> {
      return this.httpClient.post<IServerAuthResponse>(`${environment.baseUrl}/v1/login`, {
        email: email,
        password: password,
      })
    } */

  private fakeAuthProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    if (!email.toLowerCase().endsWith("@test.com")) {
      return observableThrowError(
        "Failed to login! Email needs to end with @test.com."
      );
    }

    const authStatus = {
      isAuthenticated: true,
      userId: "e4d1bc2ab25c",
      userRole: email.toLowerCase().includes("cashier")
        ? Role.Cashier
        : email.toLowerCase().includes("clerk")
          ? Role.Clerk
          : email.toLowerCase().includes("manager")
            ? Role.Manager
            : Role.None
    } as IAuthStatus;

    const authResponse = {
      accessToken: sign(authStatus, "secret", {
        expiresIn: "1h",
        algorithm: "none"
      })
    } as IServerAuthResponse;

    return of(authResponse);
  }




  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout();

    const loginResponse = this.authProvider(email, password).pipe(
      map(value => {
        this.setToken(value.accessToken) //added 75% JSON Web Token life cycle
        return decode(value.accessToken) as IAuthStatus;
      }),
      catchError(transformError)
    );

    loginResponse.subscribe(
      res => {
        this.authStatus.next(res);
      },
      err => {
        this.logout();
        return observableThrowError(err);
      }
    );

    return loginResponse;
  }

  logout() {
    this.clearToken()
    this.authStatus.next(defaultAuthStatus);
  }

  private setToken(jwt: string) {
    this.setItem('jwt', jwt)
  }

  private getDecodedToken(): IAuthStatus {
    return decode(this.getItem('jwt'))
  }

  getToken(): string {
    return this.getItem('jwt') || ''
  }

  private clearToken() {
    this.removeItem('jwt');

  }

}

/*Every subsequent request will contain the JWT in the request header. 
You should secure every API to check for and validate the token received. 
For example, if a user wanted to access their profile, the AuthService would 
validate the token to check whether the user authenticated, but a further database 
call is required to check whether the user is also authorized to view the data. 
This ensures an independent confirmation of the users' access to the system and prevents 
any abuse of an unexpired token.
*/

/*If an authenticated user makes a call to an API, where they don't have the proper authorization, 
say if a clerk wants to get access to a list of all the users, then the AuthService will return a 
falsy status and the client will receive a 403 Forbidden response, which will be displayed as an 
error message to the user.*/

/*A user can make a request with an expired token; when this happens, a 401 Unauthorized response 
is sent to the client. As a good UX practice, we should automatically prompt the user to login 
again and let them resume their workflow without any data loss.
*/

/*In summary, real security is achieved by a robust server-side implementation and any client-side 
implementation is largely there to enable a good UX around good security practices.*/