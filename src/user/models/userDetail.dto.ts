import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()

export class UserDetailEntity { 
    @Field(type=>Int)
    readonly id: number
    
    @Field()
    email :string 

    @Field({nullable:true})
    fullName?: string 

    @Field({nullable:true})
    phone?:string 

    @Field({nullable:true})
    bio? :string 


}
