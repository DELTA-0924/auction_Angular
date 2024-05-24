import { Component, Inject, OnInit,inject } from '@angular/core';
import { AuctionComponent } from '../../auction/auction.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAuction } from '../../../model/Auction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Task,ITask ,ITaskResponce,TaskResponce} from '../../../model/Task';
import { Auctionservice } from '../../../services/auction.service';
import { error } from 'console';
import { Rating ,IRating} from '../../../model/Rating';
import { TaskComponent } from '../../task/task.component';
@Component({
  selector: 'app-auction-detail-page',
  standalone: true,
  imports:[CommonModule,FormsModule,TaskComponent],
  templateUrl: './auction-detail-page.component.html',
  styleUrl: './auction-detail-page.component.css',
providers:[UserService,Auctionservice]
})
export class AuctionDetailPageComponent implements OnInit{
  Auction:IAuction={created:new Date,creatorId:"",titleName:"",finished:new Date,description:"",status:"",id:"",creator:""}
  Task:ITask={AuctionId:"",Content:"",StudentId:"",StudentName:""};
  route:ActivatedRoute=inject(ActivatedRoute)
  Admin:boolean=true;
  TaskList:ITaskResponce[]=[];
  LoadTask:boolean=false;
  Rating:IRating[]=[]
  constructor(private userservice:UserService,private cookie:CookieService,private auctionservice:Auctionservice,private router:Router) {
    
  }
  ngOnInit(): void {
      this.route.data.subscribe((data)=>{
        this.Auction.creator=data["data"]["creator"]
        this.Auction.creatorId=data["data"]["creatorId"]
        this.Auction.created=data["data"]["created"]
        this.Auction.finished=data["data"]["finished"]
        this.Auction.titleName=data["data"]["titlename"]
        this.Auction.description=data["data"]["description"]
        this.Auction.status=data["data"]["status"]
        this.Auction.id=data["data"]["id"]
      })
      let token=this.cookie.get("tasty-cookies");      
      let userId=this.userservice.getIdFromToken(token);
      if(this.Auction.creatorId==userId){
        this.Admin=false        
        this.auctionservice.GetListTask(this.Auction.id!).subscribe((tasks)=>{
          console.log(tasks)
          this.TaskList=tasks;
          
          this.LoadTask=true;             
        }                 
      )
      }
      this.auctionservice.GetListRating(this.Auction.id!).subscribe((ratings)=>{
        this.Rating=ratings;
        
      })
               
  }
  createTask(){
    this.Task.AuctionId=this.Auction.id!;    
    this.auctionservice.CreateTask(this.Task).subscribe();
    this.router.navigate([this.router.url])
    .then(() => {
      window.location.reload();
    });
  }

}
