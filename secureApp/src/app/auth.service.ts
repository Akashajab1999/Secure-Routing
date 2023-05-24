import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient:HttpClient,private JWTHelper:JwtHelperService) { }
  logIn(user:User):Observable<any>{
    console.log("inside request")
    let url ="http://localhost:5235/api/auth/authenticate/";
      return this.httpClient.post<User>(url,user);
      }

      getRoleFromLSAToken():string{
        const token= localStorage.getItem("jwt");
        if(token){
          const decodedToken:any = this.JWTHelper.decodeToken(token);
          localStorage.setItem("role",decodedToken.Roles);

          return decodedToken.Roles;
        }
        return "no role";
      }
      
}
