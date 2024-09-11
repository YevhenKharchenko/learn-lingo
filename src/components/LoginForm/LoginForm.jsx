import s from './LoginForm.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../validation/loginValidationSchema.js';
import { loginUser } from '../../redux/auth/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/selectors.js';
import Loader from '../../shared/components/Loader/Loader.jsx';
import { useState } from 'react';

const LoginForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async ({ email, password }) => {
    await dispatch(loginUser({ email, password }));

    reset();
    closeModal();
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
        <label className={s.passLabel}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <svg
            className={s.eyeIcon}
            width="20"
            height="20"
            onClick={() => setShowPassword(!showPassword)}
          >
            <use xlinkHref={`${sprite}#icon-${showPassword ? 'eye' : 'eye-off'}`}></use>
          </svg>
          <div className={s.errorContainer}>
            {errors.password && <p className={s.error}>{errors.password.message}</p>}
          </div>
        </label>
        {isRefreshing ? (
          <Loader className={s.loader} />
        ) : (
          <Button type="submit" title="Log In" className={s.submitBtn} />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
