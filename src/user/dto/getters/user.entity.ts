import { ObjectType, Field, ID} from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import{Column, CreateDateColumn,
       DeleteDateColumn, Entity,
       PrimaryGeneratedColumn, 
       UpdateDateColumn,Unique} from "typeorm";

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
