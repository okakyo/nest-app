import { ObjectType, Field} from "@nestjs/graphql";
import { OrderEntity} from "../";
import{Column, CreateDateColumn,PrimaryColumn,
       DeleteDateColumn, Entity,
       UpdateDateColumn, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { UserDetailEntity } from "../userDetail/userDetail.entity";

@ObjectType()
@Entity("user")
export class UserEntity {

    @Field({nullable:false})
    @PrimaryColumn({nullable:false})
    id:string

    @Field({nullable:false})
    @Column({nullable:false})
    name: string;

    @Field({nullable:true})
    @Column({nullable:true})
    thumbnail?:string

    @Field({nullable:true})
    @Column({nullable:false,default:0})
    type?:number

    @OneToMany(()=>OrderEntity,order=>order.servicer,{cascade:true})
    @Field((type=>[OrderEntity]),{defaultValue:[]})
    servicer?:OrderEntity[]

    @OneToMany(()=>OrderEntity,order =>order.receiver,{cascade:true})
    @Field(type=>[OrderEntity],{defaultValue:[]})
    reciever?:OrderEntity[]

    @OneToOne(()=>UserDetailEntity,user=>user.userId,{cascade:true})
    @JoinColumn()
    detail?:UserDetailEntity

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
