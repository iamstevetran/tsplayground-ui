import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { CodemirrorModule } from 'ng2-codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'jshint';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/javascript-lint.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';

import { AppComponent } from './app.component';
import { TsEditorComponent } from './ts-editor/ts-editor.component';
import { JsEditorComponent } from './js-editor/js-editor.component';

import { CompileService } from './shared/compile.service';

@NgModule({
  declarations: [
    AppComponent,
    TsEditorComponent,
    JsEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    CodemirrorModule
  ],
  providers: [
    CompileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
