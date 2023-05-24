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
 validUser:boolean=false;
  constructor(private svc :AuthService,private router:Router){}

 
  
  logIn(form:any){
    this.svc.logIn(this.user).subscribe((response)=>{
    console.log(response.token);
    localStorage.setItem("jwt",response.token);
    console.log(this.user);
    if(this.user){
      this.validUser=true;
      
    }
    console.log(response);
  })

  }

}
