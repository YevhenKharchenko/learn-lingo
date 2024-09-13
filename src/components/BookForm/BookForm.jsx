import toast from 'react-hot-toast';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookValidationSchema } from '../../validation/bookValidationSchema.js';
import Button from '../../shared/components/Button/Button.jsx';
import Input from '../../shared/components/Input/Input.jsx';
import s from './BookForm.module.scss';

const BookForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookValidationSchema),
    defaultValues: {
      reason: 'career',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
    closeModal();
    toast.success(
      'Your request for a trial lesson has been submitted! Our tutor will contact you soon.',
      {
        autoClose: 5000,
      }
    );
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={s.fieldset}>
        <legend className={s.legend}></legend>
        <div className={s.radioWrapper}>
          <label className={s.radioLabel} htmlFor="career">
            <input
              type="radio"
              value="career"
              {...register('reason')}
              className={clsx(s.radio, s.visuallyHidden)}
              id="career"
              name="reason"
            />
            <div className={s.customRadio}>
              <div className={s.radioCircle}></div>
            </div>
            Career and business
          </label>
          <label className={s.radioLabel} htmlFor="kids">
            <input
              type="radio"
              value="kids"
              {...register('reason')}
              className={clsx(s.radio, s.visuallyHidden)}
              id="kids"
              name="reason"
            />
            <div className={s.customRadio}>
              <div className={s.radioCircle}></div>
            </div>
            Lesson for kids
          </label>
          <label className={s.radioLabel} htmlFor="abroad">
            <input
              type="radio"
              value="abroad"
              {...register('reason')}
              className={clsx(s.radio, s.visuallyHidden)}
              id="abroad"
              name="reason"
            />
            <div className={s.customRadio}>
              <div className={s.radioCircle}></div>
            </div>
            Living abroad
          </label>
          <label className={s.radioLabel} htmlFor="exams">
            <input
              type="radio"
              value="exams"
              {...register('reason')}
              className={clsx(s.radio, s.visuallyHidden)}
              id="exams"
              name="reason"
            />
            <div className={s.customRadio}>
              <div className={s.radioCircle}></div>
            </div>
            Exams and coursework
          </label>
          <label className={s.radioLabel} htmlFor="culture">
            <input
              type="radio"
              value="culture"
              {...register('reason')}
              className={clsx(s.radio, s.visuallyHidden)}
              id="culture"
              name="reason"
            />
            <div className={s.customRadio}>
              <div className={s.radioCircle}></div>
            </div>
            Culture, travel or hobby
          </label>
        </div>
        <div className={s.radioErrorContainer}>
          {errors.reason && <p className={s.error}>{errors.reason.message}</p>}
        </div>
      </fieldset>

      <label>
        <Input type="text" placeholder="Full Name" {...register('name')} />
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
      <label>
        <Input type="tel" placeholder="Phone number" {...register('tel')} />
        <div className={s.errorContainer}>
          {errors.tel && <p className={s.error}>{errors.tel.message}</p>}
        </div>
      </label>
      <Button type="submit" title="Book" className={s.submitBtn} />
    </form>
  );
};

export default BookForm;
