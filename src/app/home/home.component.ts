import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-home",
  template: `
    <div *ngIf="displayLogin"><app-login></app-login></div>
    <div *ngIf="!displayLogin">
      <span class="mat-display-3"
        >You get a lemon, you get a lemon, you get a lemon...</span
      >
    </div>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  private _displayLogin = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.authService.authStatus.subscribe(
      authStatus => (this._displayLogin = !authStatus.isAuthenticated)
    );
  }

  get displayLogin() {
    return this._displayLogin;
  }

  /*A property getter for displayLogin here is necessary, otherwise you may receive a Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked message. This error is a side effect of how the Angular component life-cycle and change detection works. This behavior may very well change in future Angular versions. */
}
