import { 
	Component, 
	OnInit,
	Output,
	EventEmitter } from '@angular/core';

import { CompileService } from '../shared/compile.service';

@Component({
  selector: 'app-ts-editor',
  templateUrl: './ts-editor.component.html',
  styleUrls: ['./ts-editor.component.css']
})

export class TsEditorComponent implements OnInit {
	code: string;
	configs = { 
		lineNumbers: true,
		mode: {
			name: 'javascript',
			json: true,
			typescript: true
		},
		gutters: ['CodeMirror-lint-markers'],
    lint: true,
		tabSize: 2,
		theme: 'material',
		matchBrackets: true,
	};
	updateTimeout: any;

	@Output() onCompile = new EventEmitter();
	@Output() onStartCompile = new EventEmitter();
	@Output() onEndCompile = new EventEmitter();

  constructor(private compileService: CompileService) { }

  ngOnInit() {

  }

  codeChange() {
  	this.onStartCompile.emit(true);
		if (this.updateTimeout) {
			clearTimeout(this.updateTimeout);
		}

  	this.updateTimeout = setTimeout(() => {
  		this.compileService.compile(this.code, '2.2').subscribe(jsCode => {
  			this.onCompile.emit(jsCode);
  			this.onEndCompile.emit(true);
  		})
  	}, 1000);
  }

  onFocus() {

  }

  onBlur() {

  }
}
