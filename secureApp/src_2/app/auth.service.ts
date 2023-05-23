import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient:HttpClient) { }
  logIn(user:User):Observable<any>{
    console.log("inside request")
    let url ="http://localhost:5235/api/auth/authenticate/";
      return this.httpClient.post<User>(url,user);
      }
}
