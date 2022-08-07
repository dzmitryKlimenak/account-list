import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AccountFieldsEnum } from "../../common/enum/account-fields.enum";
import { ACCOUNT_FORM } from "../../common/constant/account-form.constant";
import { Account } from "../../common/interface/account.interface";
import {
  AddressValidators,
  BusinessAddressValidators, CityValidators, CountryValidators,
  GenderValidators,
  NameValidators,
  PersonalIDValidators, PhoneValidators,
  SurnameValidators
} from "../../common/constant/field-validators.constant";
import { AccountsStore } from "../../core/store/accounts/accounts.store";

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss']
})
export class AccountDialogComponent {
  ACCOUNT_FIELDS = AccountFieldsEnum;
  ACCOUNT_FORM = ACCOUNT_FORM;
  form: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public account: Account,
    private dialogRef: MatDialogRef<AccountDialogComponent>,
    private fb: FormBuilder,
    private accountStore: AccountsStore,) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      [AccountFieldsEnum.NAME]: [
        this.account?.name,
        NameValidators,
      ],
      [AccountFieldsEnum.SURNAME]: [
        this.account?.surname,
        SurnameValidators,
      ],
      [AccountFieldsEnum.GENDER]: [
        this.account?.gender || 'male',
        GenderValidators,
      ],
      [AccountFieldsEnum.PERSONAL_NUMBER]: [
        this.account?.personal_number,
        PersonalIDValidators,
      ],
      [AccountFieldsEnum.PHONE]: [
        this.account?.phone,
        PhoneValidators,
      ],
      [AccountFieldsEnum.BUSINESS_ADDRESS]: [
        this.account?.business_address,
        BusinessAddressValidators,
      ],
      [AccountFieldsEnum.COUNTRY]: [
        this.account?.country,
        CountryValidators,
      ],
      [AccountFieldsEnum.CITY]: [
        this.account?.city,
        CityValidators,
      ],
      [AccountFieldsEnum.ADDRESS]: [
        this.account?.address,
        AddressValidators,
      ],
    });
  }

  close() {
    this.account?.edit ? this.dialogRef.close(this.account) : this.dialogRef.close(null)
  }

  save() {
    this.dialogRef.close(this.getPayload());
  }

  getPayload(): Account {
    return {...this.accountStore.activeAccount,...this.form.value};
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    } else {
      this.save();
      this.form.reset();
    }
  }

  checkFormControl(control: string): boolean {
    return this.form.get(control).invalid && this.form.get(control).touched;
  }
}
