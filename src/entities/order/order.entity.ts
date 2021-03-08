import { ObjectType,Field } from "@nestjs/graphql";
import { IsIn, IsInt, MaxLength} from "class-validator";
import { UserEntity } from "../user/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("order")
@ObjectType()
export class OrderEntity {

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
    
    @ManyToOne(()=>UserEntity,user=>user.servicer)
    @Field((type)=>UserEntity)
    readonly servicer?:UserEntity

    @ManyToOne(()=>UserEntity,user=>user.reciever)
    @Field((type)=>UserEntity)
    readonly receiver?:UserEntity

    @Field({nullable:true})
    @Column({default:0,nullable:false})
    @IsInt()
    price?:number

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
