import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisplayOptions, DisplayTemplates, IehrForm, Product } from '../model';

export class ProductForm implements IehrForm {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private product?: Product) {
    this.initFormGroup();
  }

  initFormGroup(): void {
    this.formGroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    if (this.product) {
      this.populateForm(this.product);
    }
  }
  populateForm(product: Product): void {
    this.formGroup.get('id').setValue(product.id);
    this.formGroup.get('name').setValue(product.name);
    this.formGroup.get('category').setValue(product.category);
    this.formGroup.get('quantity').setValue(product.quantity);
  }
}
