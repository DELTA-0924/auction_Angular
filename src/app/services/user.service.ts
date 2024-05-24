import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{IUser}from '../model/User';
import { Observable, catchError,BehaviorSubject, Subject, AsyncSubject, throwError, map, EMPTY } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { HandlErrorService } from './handl-error.service';
import { USerProfile } from '../model/UserProfile';
import { AnyARecord } from 'dns';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private GetToken:number;
  private headersJson=new HttpHeaders().set("Content-Type", "application/json")  
  private url="http://localhost:5110"
  public  UserStatus$= new BehaviorSubject<number>(404);  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpclient:HttpClient,private handleerror:HandlErrorService,private cookiesservice:CookieService) { 

  }
  get isLoggedIn(): Observable<boolean> 
  {
    console.log("Проверка")
    return this.loggedIn.asObservable();
  }
  Create(user:IUser,role:string):Observable<IUser>{    
    let serUser=JSON.stringify(user);
    console.log(serUser);
    return this.httpclient.post<IUser>(`${this.url}/Register/${role}`,serUser,{headers:this.headersJson}).pipe(
      catchError(this.handleerror.HandleError)
    )
  }
  getByEmail(email:string,password:string):Observable<any>{
    let loginData={
      Email:email,
      Password:password
    }
    let serData=JSON.stringify(loginData);
    console.log(serData);
    return this.httpclient.post(`${this.url}/Login`,serData,{headers:this.headersJson}).pipe(
      catchError(this.handleerror.HandleError));    
  }
  SetUserStatus():void{        
    
    this.UserStatus$.next(202);
    
    console.log("Set a status passed")
  }   
  user:USerProfile={Username:"sam",Firstname:"samira",Email:"sma2gmail.com",Aboutme:"sdsd",Company:"sdsd",Surname:"sdsd",age:0}
  getProfile():Observable<USerProfile>{
    let token =this.cookiesservice.get("tasty-cookies");  
    console.log(token)    
    const headersText=new HttpHeaders().set("Authorization", token)
  
    return this.httpclient.get<USerProfile>(`${this.url}/Profile`,{headers:headersText}).pipe(
      catchError(error=>{
        console.log(error)
        return EMPTY;
      })
    )
    }
    updateUserprofile(userprofile:USerProfile):Observable<USerProfile>{
    let token =this.cookiesservice.get("tasty-cookies");  
    console.log(token)    
    this.headersJson=this.headersJson.append("Authorization", token)
  
      let user=JSON.stringify(userprofile)
      console.log(userprofile);
      return this.httpclient.post<USerProfile>(`${this.url}/set-Profile`,user,{headers:this.headersJson});
    }
    getIdFromToken(token: string): string {
      
        try{
        const decodedToken: any = jwtDecode(token);
        return (decodedToken["userId"]); // или decodedToken.id, если ID хранится в другом поле
        }catch(error){
          return "null"
        }
        // Извлекаем ID (предполагается, что ID находится в 'sub' или другом поле)
    }
    
}

