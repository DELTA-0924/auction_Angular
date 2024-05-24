import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../../model/User';
import { UserService } from '../../../services/user.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {Subscription}from 'rxjs'
import{distinctUntilChanged} from'rxjs/operators'
import { Input } from '@angular/core';
import { REMOVE_STYLES_ON_COMPONENT_DESTROY } from '@angular/platform-browser';
import { response } from 'express';
import { ILoginresponse } from '../../../model/LoginResonse';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers:[UserService]
})
export class LoginPageComponent implements OnInit{
  @Input() title:string;
  email:string;
  password:string;
  private loginresponce:ILoginresponse={token:"",permissions:[]}
  public GetToken:boolean=false;
  private subs: Subscription;
  constructor(private userservice:UserService,private router:Router){
  }
  ngOnInit(): void {    
      this.userservice.UserStatus$.pipe(distinctUntilChanged()).subscribe((status) => console.log(status));
      console.log(this.GetToken);
  }
  Login():void{    
    console.log(this.email)
    console.log(this.password)
      this.userservice.getByEmail(this.email,this.password).subscribe(
        loginresponse=>{
          this.loginresponce=loginresponse
          document.cookie=`tasty-cookies=${this.loginresponce.token}`
          this.router.navigate([""]);
          document.cookie=`permissions=${this.loginresponce.permissions}`
        },
        (error)=>{
          alert(error.statusText)
        }                
      )  ;

  } 

}
