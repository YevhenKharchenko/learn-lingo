import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password cannot be longer than 20 characters')
    .required('Password is required'),
});
