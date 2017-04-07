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

	supportedVersions: string[] = [
		'2.2.2',
		'2.2.0',
		'2.1.6',
		'2.1.5',
		'2.1.4',
		'2.0',
		'1.8'
	]

	version: string = this.supportedVersions[0];

  constructor(private compileService: CompileService) { }

  ngOnInit() {

  }

  codeChange(version?: string) {
  	this.onStartCompile.emit(true);
		version = version || this.version;
		this.version = version;

		if (this.supportedVersions.indexOf(version) === -1) {
			this.onCompile.emit('// Compile failed');
			this.onEndCompile.emit(true);
		}

		if (this.updateTimeout) {
			clearTimeout(this.updateTimeout);
		}

  	this.updateTimeout = setTimeout(() => {
  		this.compileService.compile(this.code, version)
				.subscribe(jsCode => {
					this.onCompile.emit(jsCode);
					this.onEndCompile.emit(true);
				}, () => {
					this.onCompile.emit('// Compile failed');
					this.onEndCompile.emit(true);
				})
  	}, 1000);
  }

	versionChange(version: string) {
		this.codeChange(version);
	}

  onFocus() {

  }

  onBlur() {

  }
}
