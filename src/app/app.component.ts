import { Component } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";
import { MatToolbar, MatIconRegistry, MatIcon } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "orange-mart";

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'orange',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/orange.svg')
    );
  }
}
