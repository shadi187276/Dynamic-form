import { FormGroup } from "@angular/forms";

export interface Product {
  id?: string;
  name: string;
  category: string;
  quantity: number;
}

export interface DisplayOptions {
  field?: string; // sanity check
  readonly?: boolean;
  staticLabel?: boolean;
  required?: boolean;
  notEmpty?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  uniqueName?: boolean;
  isAfter?: string;
  isBefore?: string;
  isBeforeEffectiveDate?: string;
  isUnder18?: string;
  greaterThen?: string;
  objectRequired?: Object;
  unique?: boolean;
  noStartDate?: boolean;
  isBeforeDate?: boolean;
  range?: string;
  noCountryCode?: boolean;
  noNationalNumber?: boolean;
  noCharacter?: boolean;
  greaterPayment?: string;
  invalidFormat?: string;
  fieldsMissMatch?: string;
  fieldsMatch?: string;
  notEqualToPayment?: string;
  rangeError?: string;
  appointmentConfirmation?: boolean;
  occurrenceMin?: string;
  occurrenceMax?: string;
  // isCurrentDate?: boolean;
}

export class DisplayTemplates {
  static get Product_TEMPLATE() {
    const opts: { [key: string]: DisplayOptions } = {};
    opts['id'] = {
      pattern: 'VALIDATIONS_ERROR.NUMERIC_VALUE_WITH_DECIMAL'
    };
    opts['name'] = {
      pattern: 'VALIDATIONS_ERROR.NUMERIC_VALUE_WITH_DECIMAL',
      greaterThen: 'VALIDATIONS_ERROR.LESS_THEN_SYSTOLIC_VALUE'
    };
    opts['category'] = {
      pattern: 'VALIDATIONS_ERROR.NUMERIC_VALUE_WITH_DECIMAL'
    };
    opts['quantity'] = {
      pattern: 'VALIDATIONS_ERROR.NUMERIC_VALUE_WITH_DECIMAL'
    };
    return opts;
  }
}

export interface IehrForm {
  formGroup: FormGroup;
  displayOpts?: DisplayOptions;

  initFormGroup(): void;

  populateForm(data: any): void;
}
