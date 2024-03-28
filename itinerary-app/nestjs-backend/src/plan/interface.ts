import * as mongoose from 'mongoose'

export interface Plan extends mongoose.Document{
    id:string;
    title:string | null;
    images:string[];
    description:string | null;
    fromTime:Date | null;
    toTime:Date | null;
    tags:string[]
    resultArea:boolean;
}