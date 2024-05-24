import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuction } from "../model/Auction";
import { Observable, catchError, tap,of, EMPTY } from "rxjs";
import { HandlErrorService } from "./handl-error.service";
import { CookieService } from "ngx-cookie-service";
import { Task ,ITask,ITaskResponce} from "../model/Task";
import { map } from "rxjs";
import { IRating, Rating } from "../model/Rating";
@Injectable({
    providedIn:'root'
})
export class Auctionservice{
    constructor(private httpClient:HttpClient,private handleerror:HandlErrorService,private cookieservice:CookieService){
        
    }
    private url="http://localhost:5110";
    private HeaderJson=new HttpHeaders().set("Content-Type","application/json")
    
    getById(id:Number):Observable<IAuction>{
        return this.httpClient.get<IAuction>(`${this.url}/auction/auction-detail/${id}`).pipe(
            catchError(this.handleerror.HandleError)
        )
    }
    getAll():Observable<IAuction[]>{
        return this.httpClient.get<IAuction[]>("http://localhost:5110",{
            params:new  HttpParams({
                fromObject:{limit:10}
            })
        }).pipe(
           catchError(this.handleerror.HandleError) 
        )        
    }   
    CreateGet(){
        return this.httpClient.get(`${this.url}/auction/create`).pipe(catchError(this.handleerror.HandleError))
    }
    Create(title:string,desc:string,finished:Date){
       let token=this.cookieservice.get("tasty-cookies")
        this.HeaderJson=this.HeaderJson.append("Authorization",token!)
        let auction={
            Title:title,
            Description:desc,
            Finished:finished
            }
        let serAuction=JSON.stringify(auction);
        console.log(this.HeaderJson.get("Authorization"))
        console.log(this.HeaderJson.get("Content-Type"))
        console.log(serAuction);
        return this.httpClient.post(`${this.url}/auction/create`,serAuction,{headers:this.HeaderJson}).pipe(catchError(this.handleerror.HandleError));
    }
    CreateTask(task:Task){
        let token=this.cookieservice.get("tasty-cookies")
        this.HeaderJson=this.HeaderJson.append("Authorization",token!)
        // let task:Task={AuctionId:auctionId,Content:content,StudentId:""}
        let JsonTask=JSON.stringify(task)
        console.log(JsonTask);
        return this.httpClient.post(`${this.url}/task/create`,JsonTask,{headers:this.HeaderJson})
    }
    GetListTask(auctionId:string):Observable<ITaskResponce[]>{
        
        return this.httpClient.get<ITaskResponce[]>(`${this.url}/task/tasklist/${auctionId}`) 
    }
    CreateRating(rating:Rating){
        console.log(rating)
        let token=this.cookieservice.get("tasty-cookies")
        this.HeaderJson=this.HeaderJson.append("Authorization",token!)
        let ratingjson=JSON.stringify(rating);
        console.log(ratingjson);
        return this.httpClient.post(`${this.url}/rating/create`,ratingjson,{headers:this.HeaderJson})
    }
    GetListRating(auctionId:string):Observable<IRating[]>{
        return this.httpClient.get<IRating[]>(`${this.url}/rating/get-ratings/${auctionId}`);
    }
}