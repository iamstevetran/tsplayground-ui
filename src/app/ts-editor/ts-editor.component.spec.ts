import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsEditorComponent } from './ts-editor.component';

describe('TsEditorComponent', () => {
  let component: TsEditorComponent;
  let fixture: ComponentFixture<TsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
