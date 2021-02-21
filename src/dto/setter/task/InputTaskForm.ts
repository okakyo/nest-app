import {InputType,Field} from "@nestjs/graphql";
import { IsInt, MaxLength } from "class-validator";


@InputType()
export class inputTask {
    
    @Field({nullable:true})
    id?:number

    @Field({nullable:false})
    @MaxLength(100)
    title:string

    @Field({nullable:false})
    @MaxLength(5000)
    description:string

    @Field({nullable:false})
    @IsInt()
    state:number


}