import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	jsCode: string;
	isTsCompiling: boolean = false;

	constructor(private authService?: AuthService) {

	}

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
