import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDetailEntity { 
    @Field(type=>Int)
    readonly id: number
    
    @Field()
    email :string 

    @Field()
    fullName?: string 

    @Field()
    phone?:string 

    @Field()
    bio :string 


}