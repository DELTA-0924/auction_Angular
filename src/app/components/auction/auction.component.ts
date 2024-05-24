import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { Input } from "@angular/core";
import { Auctionservice } from "../../services/auction.service";
import { IAuction } from "../../model/Auction";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
@Component({
    selector:"App-auction",
    standalone:true,
    imports:[FormsModule,CommonModule,RouterLink],
    templateUrl:'./auction.component.html'
})
export class  AuctionComponent{
    @Input() auction:IAuction;
} 