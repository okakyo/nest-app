import {Field, ObjectType,Int} from "@nestjs/graphql";

@ObjectType()
export class UserEntity {
    @Field(type=>Int)
    readonly id:number

    @Field()
    name:String

    @Field(type=>Int)
    type: Number

    @Field()
    introduction: 


}

