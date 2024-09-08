import s from './LoginForm.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../validation/loginValidationSchema.js';

const LoginForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <div className={s.container}>
      <button className={s.closeBtn} onClick={closeModal}>
        <svg className={s.closeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <h2 className={s.loginTitle}>Log In</h2>
      <p className={s.loginText}>
        Welcome back! Please enter your credentials to access your account and continue your search
        for an teacher.
      </p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input type="email" placeholder="Email" {...register('email')} />
          <div className={s.errorContainer}>
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </div>
        </label>
        <label>
          <Input type="password" placeholder="Password" {...register('password')} />
          <div className={s.errorContainer}>
            {errors.password && <p className={s.error}>{errors.password.message}</p>}
          </div>
        </label>
        <Button type="submit" title="Log In" className={s.submitBtn} />
      </form>
    </div>
  );
};

export default LoginForm;
