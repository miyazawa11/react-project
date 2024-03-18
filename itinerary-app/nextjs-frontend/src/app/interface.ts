export interface Plan{
    id:string;
    plan:string;
    memo:string;
    // file:"file"string;
    fromTime:Date | null;
    toTime:Date | null;
}