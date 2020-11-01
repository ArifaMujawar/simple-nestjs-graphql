# Simple Nestjs GraphQL Query

## Queries

```
mutation editPhoneNumber{
 editPhoneNumber(id: 10, phoneNumber: "+892 345"){
    firstName,
    address,
    phoneNumber
  }
}

query author{
  author(id: 10){
    firstName,
    address,
    phoneNumber
  }
}
```
