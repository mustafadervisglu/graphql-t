import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from 'src/pets/pets.service';
import { Pet } from 'src/pets/pet.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
