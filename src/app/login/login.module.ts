import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { MaterialModule } from '@angular/material';
import { LoginButtonDirective } from './login-button.directive';

import { AuthService } from '../shared/auth.service';
import { Auth0LoginButtonDirective } from './auth0-login-button.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginDialogComponent, LoginFormComponent, LoginButtonDirective, Auth0LoginButtonDirective],
  exports: [
    LoginButtonDirective,
    Auth0LoginButtonDirective
  ],
  entryComponents: [LoginDialogComponent],
  providers: [AuthService]
})
export class LoginModule { }
