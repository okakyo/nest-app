import { ObjectType,Field } from "@nestjs/graphql";
import { IsInt, MaxLength} from "class-validator";
import { User } from "../../../user/dto/getters/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
@ObjectType()
export class Task {

    @PrimaryGeneratedColumn()
    @Field()
    id?:number

    @Field()
    @Column({nullable:false,length:100})
    @MaxLength(100)
    title:string

    @Field()
    @Column({type:'text',nullable:false})
    @MaxLength(3000)
    description:string

    
    @ManyToOne(()=>User,user=>user.task)
    @Field((type)=>[User])
    author:User

    @Field()
    @Column({default:0})
    @IsInt()
    state:number

    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updatedAt:Date

    @Field()
    @DeleteDateColumn()
    deletedAt:Date
}
