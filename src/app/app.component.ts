import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Product } from './model';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS } from './constants';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductFromComponent } from './product-from/product-from.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    TableModule,
    CommonModule,
    DialogModule,
    ProductFromComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  productList: Product[] = [];
  numberOfRows = APP_CONSTANTS.MAX_RESULTS;
  selectedProduct: Product;
  addOrUpdateDialog = false;
  docKey: string;

  constructor(private productService: ProductService) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getTableHeaders() {
    return [
      {
        field: 'id',
        header: 'id',
        sortable: true,
        width: '30%',
        hidden: false,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '30%',
        hidden: false,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '30%',
        hidden: false,
      },
      {
        field: 'quantity',
        header: 'Quantity',
        sortable: true,
        width: '30%',
        hidden: false,
      },
    ];
  }

  onRowSelect() {
    this.docKey = this.selectedProduct.id;
    this.addOrUpdateDialog = true;
  }

  HandleAdd() {
    this.addOrUpdateDialog = true;
  }

  handleCloseDialog(){
    this.addOrUpdateDialog = false;
  }

  reloadProduct(){
    this.getProduct();
  }

  private getProduct() {
    this.productService.getProducts().subscribe(
      (product: Product[]) => {
        this.productList = product;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
