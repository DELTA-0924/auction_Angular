import { Inject, Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { IUSerProfile,USerProfile } from '../model/UserProfile';
import { EMPTY, Observable, catchError, retry } from 'rxjs';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs'
import { error } from 'console';

export class Profileresolve implements Resolve<IUSerProfile>{
  userservice:UserService=inject(UserService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<USerProfile>|USerProfile {

    
      let user:USerProfile={Username:"sam",Firstname:"samira",Email:"sma2gmail.com",Aboutme:"sdsd",Company:"sdsd",Surname:"sdsd",age:0}
       this.userservice.getProfile().subscribe((userprofile)=>{
       user=userprofile
      console.log(user);
      })
      return user;
  }
}

  export const Userresolve:ResolveFn<USerProfile>=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=> {    
      return inject(UserService).getProfile();
  }
 
