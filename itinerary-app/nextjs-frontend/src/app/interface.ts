export interface Plan{
    id:string;
    title:string | null;
    images:string[] | null;
    description:string | null;
    fromTime:Date | null;
    toTime:Date | null;
    tags:string[]
    resultArea:boolean;
}