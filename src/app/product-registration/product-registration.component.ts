import { Subscription, Observable } from 'rxjs';
import { productRegistrModel } from './../models/productRegistr';
import { HttpService } from './../services/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {
  productForm: FormGroup;
  product$: Observable<Array<productRegistrModel>>;
  // distProducts: Subscription;

  constructor(private httpProducts: HttpService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productCode: new FormControl(null, Validators.required),
      productName: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required)
    });
    this.product$ = this.httpProducts.getProducts()
  };
  // ngOnDestroy() {

  //   this.distProducts.unsubscribe();
  // }
  addProduct() {

    const newProduct: productRegistrModel = {

      productCode: this.productForm.get('productCode').value,
      productName: this.productForm.get('productName').value,
      productPrice: this.productForm.get('productPrice').value

    }

    this.httpProducts.addProducts(newProduct).subscribe((data) => {
   
      alert("Product added");
      this.product$ = this.httpProducts.getProducts();
    })


  }
}
