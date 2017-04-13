import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';

import { FormsModule } from '@angular/forms';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EditorComponent,
    MonacoEditorComponent,
    CodemirrorComponent
  ],
  exports: [EditorComponent]
})
export class EditorModule { }
