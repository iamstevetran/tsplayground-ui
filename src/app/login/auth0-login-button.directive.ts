import { 
  Directive,
  HostListener
} from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Directive({
  selector: '[appAuth0LoginButton]'
})
export class Auth0LoginButtonDirective {

  constructor(private authService?: AuthService) { }
  @HostListener('click') onClick() {
    if (!this.authService.authenticated()) {
       this.authService.login();
       return;
    }
    
    this.authService.logout();
  }

}
