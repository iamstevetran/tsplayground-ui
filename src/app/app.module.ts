import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { CodemirrorModule } from 'ng2-codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/javascript-lint.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { TsEditorComponent } from './ts-editor/ts-editor.component';
import { JsEditorComponent } from './js-editor/js-editor.component';

import { AuthService } from './shared/auth.service';
import { CompileService } from './shared/compile.service';

import { LoginModule } from './login/login.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    TsEditorComponent,
    JsEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    CodemirrorModule,
    LoginModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthService,
    CompileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
