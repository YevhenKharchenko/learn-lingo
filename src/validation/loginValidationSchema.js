import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password cannot be longer than 20 characters')
    .required('Password is required'),
});
