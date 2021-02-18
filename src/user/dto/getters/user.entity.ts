import { ObjectType, Field, ID} from "@nestjs/graphql";
import { IsEmail,  MaxLength } from "class-validator";
import { Task } from "../../../task/dto/getter/task.entity";
import{Column, CreateDateColumn,
       DeleteDateColumn, Entity,
       PrimaryGeneratedColumn, 
       UpdateDateColumn,Unique, OneToMany} from "typeorm";

@ObjectType()
@Entity("User")
@Unique(['email'])
export class User {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    id:string;

    @Field({nullable:false})
    @Column({nullable:false})
    name: string;

    @Column({nullable:false})
    @Field({nullable:false})
    @IsEmail()
    email: string

    @Column({type:'text',nullable:true})
    @Field({nullable:true})
    @MaxLength(500)
    introduction?:string
    
    @OneToMany(()=>Task,task=>task.author)
    @Field((type=>[Task]),{nullable:true})
    task?:Task[]

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
