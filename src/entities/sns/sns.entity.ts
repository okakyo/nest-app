import { ObjectType,Field } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDetailEntity } from "../userDetail/userDetail.entity";

@ObjectType()
@Entity("sns")
export class SNSEntity {
    
    @PrimaryGeneratedColumn()
    @Field({nullable:true})
    readonly id:string

    @Column()
    @Field()
    snsId:string

    @Column()
    @Field()
    snsName:string

    @ManyToOne(()=>UserDetailEntity,user=>user.sns)
    @Field(type=>UserDetailEntity,{nullable:false})
    userId:UserDetailEntity




}