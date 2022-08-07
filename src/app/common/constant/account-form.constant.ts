export const ACCOUNT_FORM = {
  name: {
    minLength: 2,
    maxLength: 50,
    placeholder: 'Enter your Name',
    label: 'Name'
  },
  surname: {
    minLength: 2,
    maxLength: 50,
    placeholder: 'Enter your Surname',
    label: 'Surname'
  },
  gender: {
    label: 'Gender',
    genders: [
      {type: 'male', text: 'Male'},
      {type: 'female', text: 'Female'}
    ]
  },
  personal_number: {
    minLength: 11,
    maxLength: 11,
    placeholder: 'Enter your Personal Number',
    label: 'Personal Number'
  },
  phone: {
    minLength: 9,
    maxLength: 9,
    placeholder: 'Enter your Phone',
    label: 'Phone'
  },
  business_address: {
    minLength: 0,
    maxLength: 256,
    placeholder: 'Enter your Business Address',
    label: 'Business Address'
  },
  country: {
    minLength: 0,
    maxLength: 256,
    placeholder: 'Enter your Country',
    label: 'Country'
  },
  city: {
    minLength: 0,
    maxLength: 256,
    placeholder: 'Enter your City',
    label: 'City'
  },
  address: {
    minLength: 0,
    maxLength: 256,
    placeholder: 'Enter your Home address',
    label: 'Home address'
  }
};


