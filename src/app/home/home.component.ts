import { Component, OnInit } from "@angular/core";

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
  displayLogin = true;

  //constructor(private authService: AuthService) { }

  ngOnInit() {}
}
