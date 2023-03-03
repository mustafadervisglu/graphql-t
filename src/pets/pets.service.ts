import { Injectable } from '@nestjs/common';
import { Pet } from 'src/pets/pet.entity';

@Injectable()
export class PetsService {
  async findAll(): Promise<Pet[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'Max',
        type: 'Dog',
      },
      {
        id: 2,
        name: 'Garfield',
        type: 'Cat',
      },
    ]);
  }
}
