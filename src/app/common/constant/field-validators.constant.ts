import { Validators } from "@angular/forms";
import { ACCOUNT_FORM } from "./account-form.constant";
import { FormValidators } from "./custom-validator";

export const NameValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.name.minLength),
  Validators.maxLength(ACCOUNT_FORM.name.maxLength),
  FormValidators.isLatin
];

export const SurnameValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.surname.minLength),
  Validators.maxLength(ACCOUNT_FORM.surname.maxLength),
  FormValidators.isLatin
];

export const GenderValidators = [
  Validators.required
];

export const PersonalIDValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.personal_number.minLength),
  Validators.maxLength(ACCOUNT_FORM.personal_number.maxLength),
  FormValidators.isNumbers
];

export const PhoneValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.phone.minLength),
  Validators.maxLength(ACCOUNT_FORM.phone.maxLength),
  FormValidators.isNumbers
];

export const BusinessAddressValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.business_address.minLength),
  Validators.maxLength(ACCOUNT_FORM.business_address.maxLength)
];

export const CountryValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.country.minLength),
  Validators.maxLength(ACCOUNT_FORM.country.maxLength),
  FormValidators.isAlfaNumeric
];

export const CityValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.city.minLength),
  Validators.maxLength(ACCOUNT_FORM.city.maxLength),
  FormValidators.isAlfaNumeric
];

export const AddressValidators = [
  Validators.required,
  Validators.minLength(ACCOUNT_FORM.address.minLength),
  Validators.maxLength(ACCOUNT_FORM.address.maxLength),
  FormValidators.isAlfaNumeric
];
