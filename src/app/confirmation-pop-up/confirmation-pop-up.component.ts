import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-pop-up',
  standalone: true,
  imports: [MatDialogModule, CommonModule, FormsModule],
  templateUrl: './confirmation-pop-up.component.html',
  styleUrl: './confirmation-pop-up.component.css',
})
export class ConfirmationPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  authenticationStatus: boolean = false;
  password = '';
  onCancel(): void {
    this.dialogRef.close(false);
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  setPassword() {
    if (this.data.type === 'authenticate') {
      var obj = this.data.noteObject;
      console.log('CORRECT:' + obj.password, 'My Pas' + this.password);
      if (this.password === obj.password) {
        this.authenticationStatus = true;
      }
      let Closedata = {
        type: 'authenticare',
        value: this.authenticationStatus,
      };
      this.dialogRef.close(Closedata);
    }

    if (this.data.type === 'password') {
      if (this.password.length > 3) {
        let Closedata = {
          type: 'passwordSet',
          value: this.password,
        };
        this.dialogRef.close(Closedata);
      }
    }
  }
}
