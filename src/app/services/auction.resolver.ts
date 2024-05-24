import { ActivatedRouteSnapshot, MaybeAsync, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { IAuction } from '../model/Auction';
import {Resolve,Router} from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';
import {  Injectable, inject } from '@angular/core';
import { Auctionservice } from './auction.service'; 


export const AuctionResolver:ResolveFn<IAuction>=(route,state)=>{
    console.log("AuctionDetail",route.params["id"])
    return inject(Auctionservice).getById(route.params["id"])
}

