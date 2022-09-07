import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  
  productStar:any;

  nbreStarProduct!:number;


  baseUrl:string = 'http://localhost:3000'; // URL de l'API

  urlProduct:string = this.baseUrl +'/products'; // URL pour les produits
  urlComment:string = this.baseUrl +'/comments'; // URL pour les commentaires
  urlNotes:string = this.baseUrl + '/';

  constructor(private http: HttpClient) { }

  // fonction pour recuperer tous les produits
  getProducts(){
    return this.http.get<any>(this.urlProduct).pipe(map((res)=>{
      return res;
    }));
  }

  // Fonction pour recuperer un prodduit
  getProductId(id:number){
    return this.http.get<any>(this.urlProduct + '/' + id).pipe(map((res)=>{
      return res;
    }));
  }

  // fonction  pour recuperer les commentaires d'un produit
  getComments(artilceId:number){
    this.urlNotes = this.urlProduct + '/' + artilceId + '/comments?_expand=client';
    return this.http.get<any>(this.urlNotes).pipe(map((res)=>{
    return res;
    }));
  }

  // fonction pour afficher le nombre d'étoile d'un produit arrondi par la valeur entière
  getProductStar(art_Id:number){
    this.nbreStarProduct = 0;
    this.productStar = Array();
    this.getComments(art_Id).subscribe((result)=>{
      this.productStar = result;
    });
    if (this.productStar?.length == 0) {
      console.log("pas de commentaire");
      return 0;
    } else {
      for (let i = 0; i < this.productStar?.length; i++) {
        this.nbreStarProduct += +this.productStar[i].notes;
      }
      return (this.nbreStarProduct / this.productStar?.length);
    }

  }
}
