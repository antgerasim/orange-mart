import { Component, OnInit } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";
import { MatToolbar, MatIconRegistry, MatIcon } from "@angular/material";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title = "orange-mart";
  displayAccountIcons  = false

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authService: AuthService) {
    iconRegistry.addSvgIcon(
      'orange',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/orange.svg')
    );
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(authStatus => (this.displayAccountIcons = authStatus.isAuthenticated))

  }

}
