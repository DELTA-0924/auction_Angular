export interface IRating{
    auctionId:string;
    studentName:string;
    studentId:string;
    point:number;
}
export class Rating implements IRating{
    studentName=""
    auctionId=""
    studentId="";
    point=0;
}