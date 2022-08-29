import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  totalProducts!: number;
  
  public products:any;
  public page:number = 1;

  constructor(private api: ApiProductsService) { }

  ngOnInit(): void {
    this.totalProducts = 0;
    this.api.getProducts().subscribe((res)=>{
      this.products = res;
      this.page
      console.log(res[1]);
    });
  }

}
