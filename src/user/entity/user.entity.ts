import { ObjectType, Field, ID} from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import{Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@ObjectType()
@Entity("User")
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
