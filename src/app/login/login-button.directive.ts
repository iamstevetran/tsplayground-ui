import { 
  Directive,
  HostListener 
} from '@angular/core';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MdDialog } from '@angular/material';

@Directive({
  selector: '[appLoginButton]'
})
export class LoginButtonDirective {

  constructor(public dialog: MdDialog) { }
  @HostListener('click') onClick() {
    this.dialog.open(LoginDialogComponent);
  }
}
