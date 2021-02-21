import { ObjectType,Field } from "@nestjs/graphql";
import { IsInt, MaxLength} from "class-validator";
import { UserEntity } from "../user/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("task")
@ObjectType()
export class TaskEntity {

    @PrimaryGeneratedColumn()
    @Field()
    @IsInt()
    id?:number

    @Field()
    @Column({nullable:false,length:100})
    @MaxLength(100)
    title:string

    @Field()
    @Column({type:'text',nullable:false})
    @MaxLength(3000)
    description:string
    
    
    @ManyToOne(()=>UserEntity,user=>user.task)
    @Field((type)=>UserEntity)
    
    readonly author?:UserEntity

    @Field()
    @Column({default:0})
    @IsInt()
    state:number

    @Field()
    @CreateDateColumn()
    createdAt?:Date

    @Field()
    @UpdateDateColumn()
    updatedAt?:Date

    @Field()
    @DeleteDateColumn()
    deletedAt?:Date
}
