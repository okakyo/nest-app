import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDetail { 
    @Field(type=>Int)
    readonly id: number
    
   

}