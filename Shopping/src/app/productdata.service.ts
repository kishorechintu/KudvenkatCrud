import { Injectable } from '@angular/core';

@Injectable()
export class ProductdataService {

  public GenerateData(){

    
    return [
      {Name : 'Samsung Tv',Price : 45000.43 , Category :'Electronics'},
      {Name : 'Mobile',Price : 15000.23 , Category :'Electronics'},
      {Name : 'Watch',Price : 1300.87 , Category :'Electronics'},
      {Name : 'Nike',Price : 3000.23 , Category :'Shoes'},
      {Name : 'Lee cooper',Price : 2500.23 , Category :'Shoes'}
    ]
  };
 
}
