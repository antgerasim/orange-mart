import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatDialog,
  MatSnackBarConfig,
  MatDialogConfig
} from "@angular/material";
import { Observable } from "rxjs";
import { SimpleDialogComponent } from "./simple-dialog.component";

//In SimpleDialogComponent, using @Inject, we're able to use all variables sent by showDialog to customize the content of the dialog.

@Injectable()
export class UiService {
  /**
   *
   */
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  showToast(message: string, action = "Close", config?: MatSnackBarConfig) {
    this.snackBar.open(
      message,
      action,
      config || {
        duration: 7000
      }
    );
  }

  showDialog(
    title: string,
    content: string,
    okText = "OK",
    cancelText?: string,
    customConfig?: MatDialogConfig
  ): Observable<Boolean> {
    const dialogRef = this.dialog.open(
      SimpleDialogComponent,
      customConfig || {
        width: "300px",
        data: {
          title: title,
          content: content,
          okText: okText,
          cancelText: cancelText
        }
      }
    );
    return dialogRef.afterClosed()
  }
/*ShowDialog returns an Observable<boolean>, so you can implement a follow-on action, depending on what selection the user makes. Clicking on OK will return true, and Cancel will return false.*/

}
