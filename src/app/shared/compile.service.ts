import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class CompileService {

  constructor(private httpService: Http) { }

  compile(tsCode:string, version: string) {
  	if (!tsCode) {
  		return new Observable(subcriber => {
  			subcriber.next('');
  		});
  	}

  	tsCode = btoa(tsCode);
  	return this.httpService.get('http://localhost:3000/' + version + '/' + tsCode)
  		.map(res => res.json().compiled || '// Compile failed');
  }

}
