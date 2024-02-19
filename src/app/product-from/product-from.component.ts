import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DisplayOptions, Product } from '../model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ProductForm } from './form';
import { ButtonModule } from 'primeng/button';
import { ProductBuilder } from '../builder/product-api-builder';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-from',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './product-from.component.html',
  styleUrl: './product-from.component.scss',
})
export class ProductFromComponent implements OnInit, OnDestroy {
  @Output() closeDialog = new EventEmitter();
  @Output() reloadProduct = new EventEmitter();
  @Input() docKey: string;
  @Input() selectedProduct: Product;

  form: FormGroup;
  value: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  ngOnDestroy(): void {}

  handelSubmit(form: FormGroup): void {
    if (!this.docKey) {
      const payload: Product = ProductBuilder.buildProduct(form.value);
      this.addProduct(payload);
      return;
    }
    const payload: Product = ProductBuilder.buildProduct(form.value,this.docKey);
    this.updateProduct(payload);
  }

  handelDelete(id: string): void {
    this.productService.deleteProduct(id).subscribe(
      (res:Product) => {
        console.log(res);
        this.reloadProduct.emit();
        this.closeDialog.emit();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  private initializeForm() {
    let formModel: ProductForm;
    if (!this.docKey) {
      formModel = new ProductForm(this.formBuilder);
      this.setFormVars(formModel);
      return;
    }
    formModel = new ProductForm(this.formBuilder, this.selectedProduct);
    this.setFormVars(formModel);
  }

  private setFormVars(formModel: ProductForm): void {
    if (!formModel) {
      console.error('formModel is not found');
    }
    this.form = formModel.formGroup;
  }

  private addProduct(payload: Product) {
    this.productService.addProduct(payload).subscribe(
      (res:Product) => {
        console.log(res);
        this.closeDialog.emit();
        this.reloadProduct.emit();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  private updateProduct(payload: Product) {
    this.productService.updateProduct(payload).subscribe(
      (res:Product) => {
        console.log(res);
        this.reloadProduct.emit();
        this.closeDialog.emit();
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
