import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{

  public productForm!:FormGroup;
  produits: Product[] = [];
  searchName: string = '';

  constructor(private fb: FormBuilder, private productService:ProductService, private router: Router) {}

  ngOnInit(): void {
    //Peut être initialisé dans le constructeur
    this.productForm=this.fb.group({
      name : this.fb.control('', [Validators.required]),
      price : this.fb.control(0,),
      checked : this.fb.control(false),
    });
  }

  // Ajouter un produit
  saveProduct(): void {
    if (this.productForm.valid) {
      const nouveauProduit: Product = {
        id: 0,  // L'ID sera généré par le service
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        checked: this.productForm.value.checked,
      };
      this.productService.ajouterProduit(nouveauProduit);
      this.productForm.reset();  // Réinitialiser le formulaire après l'ajout
      this.produits = this.productService.getProduits();  // Mettre à jour la liste des produits
      this.router.navigate(['/products']);
    }
  }




}