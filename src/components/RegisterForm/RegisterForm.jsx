import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { registerValidationSchema } from '../../validation/registerValidationSchema.js';
import { registerUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import Loader from '../../shared/components/Loader/Loader.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './RegisterForm.module.scss';

const RegisterForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const [showPassword, setShowPassword] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit = async ({ email, password, name }) => {
    await dispatch(registerUser({ email, password, name }));

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
      <h2 className={s.registerTitle}>Registration</h2>
      <p className={s.registerText}>
        Thank you for your interest in our platform! In order to register, we need some information.
        Please provide us with the following information
      </p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input type="text" placeholder="Name" {...register('name')} />
          <div className={s.errorContainer}>
            {errors.name && <p className={s.error}>{errors.name.message}</p>}
          </div>
        </label>
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
          <Button type="submit" title="Sign Up" className={s.submitBtn} />
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
