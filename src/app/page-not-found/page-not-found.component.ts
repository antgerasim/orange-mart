import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
  <p>
  This page doesn't exist. Go back to <a routerLink="/home">home</a>.
</p>
<!-- This navigation can also be done via an <a href> tag implementation; however, in more dynamic and complicated navigation scenarios, you will lose features such as automatic active link tracking or dynamic link generation. -->
  `,
  styleUrls: ["./page-not-found.component.css"]
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
