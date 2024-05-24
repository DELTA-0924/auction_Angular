import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
    currentPage:string='main';
    Logged=false;
    Admin=false;
    ChangePage(page:string):void{
      this.currentPage=page
      console.log(page)
    }
    constructor(private cookieService:CookieService){

    }
  ngOnInit(): void {
    if(this.cookieService.check("tasty-cookies"))
      this.Logged=true;
    if(this.checkPermission("Create"))
      this.Admin=true;
  }
  checkPermission(permission: string): boolean {
    
    const permissionsString = this.cookieService.get('permissions');
    if (permissionsString) {
        
        const permissionsArray = permissionsString.split(',');
        
        return permissionsArray.includes(permission);
    }
    return false; 
  }
}
