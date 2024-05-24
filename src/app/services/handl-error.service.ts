import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HandlErrorService {

  constructor() { }
  public  HandleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error("An error  occured :",error.error)
    }else{
      console.error(
        `backend returden code${error.status},body was :`,error.error);

    }
    return throwError(()=>new Error ("Sometimes bad happened;please try again"))
  }
}
