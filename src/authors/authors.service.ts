import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  authorsDatabase: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
  }[];

  constructor() {
    this.authorsDatabase = [
      {
        id: 10,
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+358 1231',
        address: 'Kallio, Espoo',
      },
      {
        id: 11,
        firstName: 'Saphire',
        lastName: 'Italiano',
        phoneNumber: '+358 23121',
        address: 'Leppavaara, Espoo',
      },
      {
        id: 12,
        firstName: 'Maria',
        lastName: 'Vachini',
        phoneNumber: '+12 23451',
        address: 'Adelaide, Australia',
      },
    ];
  }

  findOneById(id: number) {
    const result = this.authorsDatabase.filter(author => author.id === id);
    return result[0];
  }

  editPhoneNumber(id: number, phoneNumber: string) {
    this.authorsDatabase = this.authorsDatabase.map(author => {
      if (author.id === id) {
        author.phoneNumber = phoneNumber;
      }
      return author;
    });
    return this.findOneById(id);
  }
}
