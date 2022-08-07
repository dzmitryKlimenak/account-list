export interface Account {
  id: number;
  name: string;
  surname: string;
  gender: 'male' | 'female';
  personal_number: number;
  phone: number;
  business_address: string;
  country: string;
  city: string;
  address: string;
  edit?: boolean;
}
