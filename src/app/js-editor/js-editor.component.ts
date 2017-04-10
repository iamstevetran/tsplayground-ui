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
		mode: {
			name: 'javascript',
			json: true
		},
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
