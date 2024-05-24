import { Component ,Input} from '@angular/core';
import { ITaskResponce, Task } from '../../model/Task';
import { Rating } from '../../model/Rating';
import { Auctionservice } from '../../services/auction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() TaskChildren:ITaskResponce={studentId:"",studentName:"",content:""};
  @Input() AuctionId:string;
  pointFlag:boolean=true;
  point:number=0
  constructor(private auctionservice:Auctionservice,private router:Router){

  }
  createRating(id:string){
    let rating:Rating={studentId:id,auctionId:this.AuctionId,point:this.point,studentName:""}
    this.auctionservice.CreateRating(rating).subscribe()
    this.refreshPage()
  }
  refreshPage() {
    this.router.navigate([this.router.url])
      .then(() => {
        window.location.reload();
      });
  }
}
