import { ObjectType, Field, ID} from "@nestjs/graphql";
import { IsPhoneNumber, IsEmail,  IsInt,  isPhoneNumber,  MaxLength } from "class-validator";
import{Column, CreateDateColumn,
       DeleteDateColumn, Entity,
       PrimaryGeneratedColumn, 
       UpdateDateColumn,Unique, OneToMany} from "typeorm";
import { SNSEntity } from "../sns/sns.entity";

@ObjectType()
@Entity("user_detail")
@Unique(['email'])
export class UserDetailEntity {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    @IsInt()
    id:number;

    @Field({nullable:false})
    @Column({nullable:false})
    userId:string

    @Column({nullable:false})
    @Field({nullable:false})
    @IsEmail()
    email: string

    @Column({nullable:true})
    @Field({nullable:true})
    password:string

    @Column({nullable:true})
    @Field({nullable:false})
    @IsPhoneNumber()
    phone:string

    @OneToMany(()=>SNSEntity,sns=>sns.userId,{cascade:true})
    @Field(type=>[SNSEntity],{nullable:true})
    sns?:SNSEntity[]

    @Column({type:'text',nullable:true})
    @Field({nullable:true})
    @MaxLength(500)
    introduction?:string

    @Field({nullable:true})
    @CreateDateColumn()
    createdAt?:Date

    @Field({nullable:true})
    @UpdateDateColumn()
    updatedAt?:Date

    @Field({nullable:true})
    @DeleteDateColumn()
    deletedAt?:Date

}
