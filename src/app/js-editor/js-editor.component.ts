import { 
	Component,
	OnInit,
	Input
} from '@angular/core';

@Component({
  selector: 'app-js-editor',
  templateUrl: './js-editor.component.html',
  styleUrls: ['./js-editor.component.css']
})
export class JsEditorComponent implements OnInit {
	configs = { 
		lineNumbers: true,
		mode: {
			name: 'javascript',
			json: true
		},
		gutters: ['CodeMirror-lint-markers'],
    lint: true,
		theme: 'material',
		matchBrackets: true,
	};
	@Input() code: string;

  constructor() { }

  ngOnInit() {
  }

  onFocus() {

  }

  onBlur() {

  }

}
