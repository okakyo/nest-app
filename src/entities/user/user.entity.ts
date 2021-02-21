import { ObjectType, Field, ID} from "@nestjs/graphql";
import { IsEmail,  IsInt,  MaxLength } from "class-validator";
import { TaskEntity } from "../";
import{Column, CreateDateColumn,
       DeleteDateColumn, Entity,
       PrimaryGeneratedColumn, 
       UpdateDateColumn,Unique, OneToMany} from "typeorm";

@ObjectType()
@Entity("user")
@Unique(['email'])
export class UserEntity {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    @IsInt()
    id:number;

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
    
    @OneToMany(()=>TaskEntity,task=>task.author)
    @Field((type=>[TaskEntity]),{defaultValue:[]})
    task?:TaskEntity[]

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
