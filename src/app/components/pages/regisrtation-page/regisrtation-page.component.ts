import { Component } from '@angular/core';
import { IUser } from '../../../model/User';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regisrtation-page',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterLink,LoginPageComponent,CommonModule],
  templateUrl: './regisrtation-page.component.html',
  styleUrl: './regisrtation-page.component.css',
  providers:[UserService]
})
export class RegisrtationPageComponent {
  private url="http://localhost:5110"
  options=[
    {id:1,name:"student"},
    {id:2,name:"admin"}
  ]
  selectedOption: any; 
  constructor(private userservice:UserService,private router:Router) {
  }
    User:IUser= {Username: '', Email: '', password: '' ,Firstname:'',Surname:"",age:0,Id:0}
    CreateUser():void{               
      this.userservice.SetUserStatus();
      let role=this.selectedOption;
      this.userservice.Create(this.User,role).subscribe(()=>
        this.router.navigate([`login`]),
      (error)=>{
        alert(error.statusText)
      }
      );
      
    } 
}
