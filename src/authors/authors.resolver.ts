import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @Mutation()
  async editPhoneNumber(
    @Args('id') id: number,
    @Args('phoneNumber') phoneNumber: string,
  ) {
    return this.authorsService.editPhoneNumber(id, phoneNumber);
  }
}
