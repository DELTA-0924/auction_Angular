export interface IUSerProfile{
    Username:string
    Email:string
    Firstname:string
    Surname:string
    age:Number
    Aboutme:string
    Company:string    
}

export class USerProfile implements IUSerProfile{
    Username:string
    Email:string
    Firstname:string
    Surname:string
    Aboutme:string
    Company:string  
    age:Number
  }