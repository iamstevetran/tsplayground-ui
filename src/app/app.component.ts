import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	jsCode: string;
	isTsCompiling: boolean;

	onTsCompile(jsCode: string) {
		this.jsCode = jsCode;
	}

	onStartTsCompile() {
		this.isTsCompiling = true;
	}

	onEndTsCompile() {
		this.isTsCompiling = false;
	}
}
