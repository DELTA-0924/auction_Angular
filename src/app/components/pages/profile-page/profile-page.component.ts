import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

import { IUSerProfile, USerProfile } from '../../../model/UserProfile';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable,map } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile-page',    
  standalone:true,
imports:[CommonModule,FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  User:IUSerProfile={Username:"Unknowun",Firstname:"Unknowun",Surname:"Unknowun",age:0,Aboutme:"Unknowun",Company:"Unknowun",Email:""}
  User$:Observable<IUSerProfile>
  route:ActivatedRoute=inject(ActivatedRoute)
  editflag:boolean=false;
  private userservice:UserService=inject(UserService)
  constructor(){

  }
  ngOnInit(): void {
    this.editflag=false;
    this.route.data.subscribe((user)=>{
      this.User.Username=user["user"]["username"]??"Unknown "
      this.User.Email=user["user"]["email"]??"Unknown"
      this.User.Firstname=user["user"]["firstname"]??"Unknown Firstname"
      if(this.User.Surname==="")
        this.User.Surname="Unknown"
      this.User.Surname=user["user"]["surname"]??"Unknown"
      this.User.Aboutme=user["user"]["aboutme"]??"Unknown"
      this.User.Company=user["user"]["company"]??"Unknown"
      this.User.age=user["user"]["age"]
      console.log();
      console.log(user);
    })
  }
  edit():void{
      this.editflag=!this.editflag
  }
  Updatedata():void{
    this.userservice.updateUserprofile(this.User).subscribe((user:USerProfile)=>{
      this.User=user;
    })
  }

}
