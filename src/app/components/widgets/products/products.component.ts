import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  totalProducts!: number;
  
  public products:any;
  public page:number = 1;

  constructor(
    private api: ApiProductsService,
    private cartService: CartService,
    private router:Router
  ) { }

  ngOnInit(): void {
     
    this.totalProducts = 0;

    this.api.getProducts().subscribe((res)=>{
      this.products = res;
      this.page;
      this.products.forEach((a: any) => {
        Object.assign(a, {quantity: 1 , total: a.Prix});
      });
    });

  }

  addToCart(productItem: any){
    this.cartService.addToCart(productItem);
    this.router.navigateByUrl('cart');
  }

}
