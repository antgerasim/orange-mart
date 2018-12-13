import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  //selector: "app-simple-dialog", //Note that SimpleDialogComponent should not have app selector like  selector: 'app-simple-dialog' since we only plan to use it with UiService. Remove this property from your component.
  template: `
    <h2 mat-dialog-title>data.title</h2>
    <mat-dialog-content> <p>data.content</p> </mat-dialog-content>
    <mat-dialog-actions>
      <span class="flex-spacer"></span>
      <button mat-button mat-dialog-close *ngIf="data.cancelText">
        data.cancelText
      </button>
      <button
        mat-button
        mat-button-raised
        color="primary"
        [mat-dialog-close]="true"
        cdkFocusInitial
      >
        data.okText
      </button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class SimpleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent, Boolean>,
    @Inject(MAT_DIALOG_DATA) public data: any
    //In SimpleDialogComponent, using @Inject, we're able to use all variables sent by showDialog to customize the content of the dialog.
  ) {}

  ngOnInit() {}
}
