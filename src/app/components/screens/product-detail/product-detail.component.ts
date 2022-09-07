import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public page:number = 1;

  public nbreStar!:number;

  public product:any;

  public comments:any;

  public productId!:number;

  constructor(
    private api:ApiProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id'];
    this.api.getProductId(this.productId).subscribe((result)=>{
      this.product = result;
      this.product.forEach((a: any) => {
        Object.assign(a, {quantity: 1 , total: a.Prix});
      });
    });

    this.api.getComments(this.productId).subscribe((result)=>{
      this.comments = result;
    });

    this.api.getProductStar(this.productId);

  }

  
  getItemStar(totalStar:any){
    let item = Array();
    let nbre = parseInt(totalStar);
    for (let i = 0; i < nbre; i++) {
      item.push('1');
    }
    for (let j = 0; j < (5 - nbre ); j++) {
      item.push('0');
      
    }
    return item;
  }

  addToCart(productItem: any){
    this.cartService.addToCart(productItem);
    this.router.navigateByUrl('/cart');
  }
}
