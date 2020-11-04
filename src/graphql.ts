
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Author {
    id: number;
    firstName: string;
    lastName?: string;
    phoneNumber?: string;
    address?: string;
}

export abstract class IQuery {
    abstract author(id: number): Author | Promise<Author>;
}

export abstract class IMutation {
    abstract editPhoneNumber(id: number, phoneNumber: string): Author | Promise<Author>;
}
