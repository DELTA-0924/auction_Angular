export interface IAuction {
  id?: string; // Используем тип string, чтобы соответствовать типу данных Guid
  titleName: string;
  description: string;
  created: Date; // Используем тип Date для дат
  finished: Date;
  creatorId:string;
  creator:string;
  status: string;

}