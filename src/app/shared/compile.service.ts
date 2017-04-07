import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class CompileService {

  constructor(
		private httpService?: AuthHttp,
		private authService?: AuthService
	) { }

  compile(tsCode:string, version: string) {
  	if (!tsCode || !this.authService.authenticated()) {
  		return new Observable(subcriber => {
  			subcriber.next('');
  		});
  	}

  	tsCode = btoa(tsCode);
  	return this.httpService.get('//localhost:3000/' + version + '/' + tsCode)
  		.map(res => res.json().compiled || '// Compile failed');
  }

}
