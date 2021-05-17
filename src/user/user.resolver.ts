import { Resolver,Query, Args } from '@nestjs/graphql';

@Resolver('user')
export class UserResolver {
    //@Query(type=>User)
    async function findUserById(@Args(id) id:number) {
        
    }
}
