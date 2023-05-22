import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users :any []=[
    {
      'email':'Pragati.B@gmail.com',
      'password':'password',
      'role':'Admin'
    },
    {
      'email':'Rushikesh',
      'password':'password',
      'role':'Customer'
    },
    {
      'email':'Akash',
      'password':'password',
      'role':'Employee'
    },
    {
      'email':'Akashay.T@gmail.com',
      'password':'password',
      'role':'Employee'
    },
    {
      'email':'Rohit.G@gmail.com',
      'password':'password',
      'role':'Customer'
    },
  ]

  
  constructor() { }

  logIn(email:string,password:string):boolean{
    const user=this.users.find((u)=>u.email ===email && u.password===password)
    if(user){
      
      localStorage.setItem("role",user.role)
      return true;
    }
    return false;
  }
}
