import * as yup from 'yup';

export const bookValidationSchema = yup.object().shape({
  form: yup.string().required('Please select a reason for learning language'),
  name: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  tel: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
});
