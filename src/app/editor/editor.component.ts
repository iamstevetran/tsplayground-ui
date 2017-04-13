import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true
    }
  ]
})
export class EditorComponent implements OnInit {
  public code = '';
  @Input() editorProvider: string = 'monaco';
  @Input() language: string;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  writeValue(value:string) {
    this.code = value;
  }

  updateValue(value:string) { 
    this.code = value;
    this.onChange(value);
    this.onTouched();
    this.change.emit(value);
  }

  onChange(_){}
  onTouched(){}
  registerOnChange(fn){this.onChange = fn;}
  registerOnTouched(fn){this.onTouched = fn;}
}
