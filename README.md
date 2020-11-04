# Simple GraphQL API using NestJS

## Running Instructions

- Install dependencies: `npm install`
- Start the GraphQL server: `npm start`
- You can access the GraphQL editor from here: `http://localhost:3000/graphql`

## Running Queries

- The schema defintion of this api can be found here: https://github.com/ArifaMujawar/simple-nestjs-graphql/blob/master/src/authors/authors.graphql

- You can try the following queries:

```
query author{
  author(id: 10){
    firstName,
    address,
    phoneNumber
  }
}

mutation editPhoneNumber{
 editPhoneNumber(id: 10, phoneNumber: "+892 345"){
    firstName,
    address,
    phoneNumber
  }
}
```
