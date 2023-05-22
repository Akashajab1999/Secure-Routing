import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User={
    email: '',
    password: '',
    
  }
  loggedIn:any;
  role:any;
 
  constructor(private svc :AuthService,private router:Router){}

 
  
  logIn(form:any):boolean{
   if(this.svc.logIn(this.user.email,this.user.password)){
    console.log("login button is clicked");
    this.loggedIn = true;
    console.log("user is valid"); 
    this.router.navigate(['/aboutUS']);
    return true;
    }
    else{
      console.log("user is Invalid"); 
      return false;
    }

  }

}
