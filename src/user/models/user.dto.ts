import {Field, ObjectType,Int} from "@nestjs/graphql";
import { UserDetailEntity } from "./userDetail.dto";

@ObjectType()
export class UserEntity {
    @Field()
    readonly id:string

    @Field()
    userId:String

    @Field()
    name:String

    @Field(type=>Int)
    type: Number

    @Field({nullable:true})
    thumbnail?: string 

    @Field(type =>UserDetailEntity,{nullable:true})
    introduction?:UserDetailEntity

    

}

