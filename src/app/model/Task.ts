export interface ITask{
    AuctionId:string;
    Content:string;
    StudentName:string
    StudentId:string
}
export class Task implements ITask{
    AuctionId: string="";
    Content: string="";
    StudentName:string=""
    StudentId: string="";
}
export interface ITaskResponce{
    content:string;
    studentName:string
    studentId:string
}
export class TaskResponce implements ITaskResponce{
    content=" qwer";
    studentName="qwrewr"
    studentId="fgdfh"
}