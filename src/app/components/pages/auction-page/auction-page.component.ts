import { Component, OnInit } from '@angular/core';

import { AuctionComponent } from '../../auction/auction.component';

import { IAuction } from '../../../model/Auction';
import { Auctionservice } from '../../../services/auction.service';
import { CommonModule } from '@angular/common';



import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-auction-page',
  standalone: true,
  imports: [AuctionComponent,CommonModule,HttpClientModule],
  providers:[Auctionservice],
  templateUrl: './auction-page.component.html',
  styleUrl: './auction-page.component.css'
})
export class AuctionPageComponent implements OnInit{
  auctions:IAuction[]=[];
  loading=true;
  constructor(private auctionservice:Auctionservice){


  }
  ngOnInit(): void {

    this.auctionservice.getAll().subscribe(auctions=>{
     this.auctions=auctions
     console.log(this.auctions[0]["titleName"])
     this.loading=false;
    }
    )
  }
}
