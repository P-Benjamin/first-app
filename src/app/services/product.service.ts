import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  produits: Product[] = [
    { id: 1, name: 'Produit 1', price: 100, checked: true },
    { id: 2, name: 'Produit 2', price: 200, checked: false },
    { id: 3, name: 'Produit 3', price: 300, checked: true },
    { id: 4, name: 'Produit 4', price: 400, checked: false },
    { id: 5, name: 'Produit 5', price: 500, checked: true },
    { id: 6, name: 'Produit 6', price: 600, checked: false },
    { id: 7, name: 'Produit 7', price: 700, checked: true },
    { id: 8, name: 'Produit 8', price: 800, checked: false },
    { id: 9, name: 'Produit 9', price: 900, checked: true },
    { id: 10, name: 'Produit 10', price: 1000, checked: false },
  ];

  constructor() { }

  // Récupérer tous les produits
  getProduits(): Product[] {
    return this.produits;
  }


  // Ajouter un produit
  ajouterProduit(produit: Product): void {
    produit.id = this.produits.length + 1;
    this.produits.push(produit);
  }

  // Supprimer un produit par son id
  supprimerProduit(id: number): void {
    this.produits = this.produits.filter((produit) => produit.id !== id);
  }

  // Rechercher un produit par nom
  rechercherProduitParNom(nom: string): Product | undefined {
    return this.produits.find((produit) => produit.name.toLowerCase() === nom.toLowerCase());
  }

  rechercherProduit(nom: string): Product[] {
    return this.produits.filter(produit =>
      produit.name.toLowerCase().includes(nom.toLowerCase())
    );
  }


  // Récupérer un produit par son id
  recupererProduitParId(id: number): Product | undefined {
    return this.produits.find((produit) => produit.id === id);
  }
}