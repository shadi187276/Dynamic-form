import { Product } from '../model';

export class ProductBuilder {
  static buildProduct(formVal: any,docKey?:string): Product {
    const apiObj: Product = {
      name: formVal.name,
      category: formVal.category,
      quantity: formVal.quantity
    };
    if(docKey){
      apiObj.id = formVal.id;
    }
    return apiObj;
  }
}
