import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number{
    let cartTotal = 0;
    this.cartItemList.map((a: any) => {
      cartTotal += +a.Prix;
    });
    return cartTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a: any, index: any)=> {
      this.cartItemList.splice(index, 1);
    });
    this.productList.next(this.cartItemList);
  }
}
