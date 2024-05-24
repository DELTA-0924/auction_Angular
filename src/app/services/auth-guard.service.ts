import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap ,map} from 'rxjs';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'  
})
export class AuthGuardService {

  constructor(private cookieService:CookieService) { }
  checkPermission(permission: string): boolean {
    
    const permissionsString = this.cookieService.get('permissions');
    if (permissionsString) {
        
        const permissionsArray = permissionsString.split(',');
        
        return permissionsArray.includes(permission);
    }
    return false; 
}
  canActivate:CanActivateFn=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|boolean=>{
    console.log("Проверка");
    const token = "tasty-cookies";
    const permission=route.data["permission"]
    if (this.cookieService.get(token)!==undefined) {   
      console.log("has token ");
        if(this.checkPermission(permission)){
          console.log("has permission ");
          return true;
        }
        console.log("hasnt permission ");
    }
    
    return false;
  }
  
}
