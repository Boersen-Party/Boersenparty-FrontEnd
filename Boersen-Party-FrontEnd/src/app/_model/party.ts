export interface Party {
    id?:number, 
    name: string;
    start_date: string;
    end_date: string;
    hosted_by: string | null | undefined;
  }