import { Component, OnInit } from '@angular/core';
  import {HttpClient} from "@angular/common/http";
  import {ProductService} from "../services/product.service";
  import {Product} from "../model/product.model";
  import { Observable, of } from 'rxjs';

  
  @Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
  })
  export class ProductsComponent  implements OnInit {
    products: Product[] = [];
    produitsTrouves: Product[] = [];
  
    public keyword : string="";

    users1 : Array<string> = ["France","Belgique","Suisse","Finlande"]
    usersList$ = of(this.users1)

    constructor(private productService:ProductService){}
    ngOnInit(): void {
      this.getProducts();
      //this.usersList$.subscribe(value => console.log(value))

      this.test().subscribe({
        next(value) { console.log('Les valeurs: ' + value); },
        error(err)  { console.error('Error: ' + err); },
        complete()  { console.log('Observable emitted the complete notification'); }
      })
    }

    test() : Observable<String[]>
    {
      return this.usersList$;
    }
  
    getProducts(){
      this.products = this.productService.getProduits();
    }
  
    handleCheckProduct(product: Product) {
      const produit = this.productService.recupererProduitParId(product.id);
      if (produit) {
        alert(`Produit trouvé : ${produit.name}, Prix: ${produit.price}`);
        console.log(`Produit trouvé : ${produit.name}, Prix: ${produit.price}`);
      } else {
        alert('Produit non trouvé');
        console.log('Produit non trouvé');
      }
    }
  
    rechercherProduitParNom(): void {
      const produit = this.productService.rechercherProduitParNom(this.keyword);
      if (produit) {
        alert(`Produit trouvé : ${produit.name}, Prix: ${produit.price}`);
      } else {
        alert('Produit non trouvé');
      }
      this.getProducts();
    }
  
    handleDelete(product: Product) {
      if(confirm("Etes vous sûre?"))
      this.productService.supprimerProduit(product.id);
      this.getProducts();
    }
  
    searchProducts() {
      this.products = this.productService.rechercherProduit(this.keyword);
    }
  
  }