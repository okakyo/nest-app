import {Field, ObjectType,Int} from "@nestjs/graphql";
import { UserDetailEntity } from "./userDetail.dto";

@ObjectType()
export class UserEntity {
    @Field(type=>Int)
    readonly id:number

    @Field()
    name:String

    @Field(type=>Int)
    type: Number

    @Field(type =>UserDetailEntity)
    introduction?:UserDetailEntity

}

