import {InputType, Field} from "@nestjs/graphql";

@InputType()
export class FindAllUserArgs {
    @Field({nullable:true})
    skip?:number

    @Field({nullable:true})
    take?:number

}