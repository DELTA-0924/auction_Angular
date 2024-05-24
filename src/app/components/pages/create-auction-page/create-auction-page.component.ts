import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAuction } from '../../../model/Auction';
import { Auctionservice } from '../../../services/auction.service';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../../services/auth-guard.service';


@Component({
  selector: 'app-create-auction-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-auction-page.component.html',
  styleUrl: './create-auction-page.component.css',
  providers:[Auctionservice]
})
export class CreateAuctionPageComponent {
    Auction:IAuction={titleName:"",description:"",created:new Date(),finished:new Date(),status:"",creatorId:"",creator:""};
    forbidden=true;
    constructor(private aucitonservice:Auctionservice,private router:Router){

    }
    // ngOnInit(): void {      
    //     this.aucitonservice.CreateGet().subscribe(()=>{},
    //       (error)=>{
    //         alert(error.statusText)
    //         if(error.StatusText!="Unauthorized")
    //         {
    //           console.log("У вас нет доступа")
    //           this.forbidden=true;
    //           this.router.navigate([""]);
    //         }
    //       }
    //     );
    // }
    CreateAuction():void{
        this.aucitonservice.Create(this.Auction.titleName,this.Auction.description,this.Auction.finished).subscribe();
    }
}
