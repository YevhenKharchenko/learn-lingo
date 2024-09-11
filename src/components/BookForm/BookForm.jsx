import Input from '../../shared/components/Input/Input.jsx';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import s from './BookForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../shared/components/Button/Button.jsx';
import sprite from '../../assets/icons/sprite.svg';
import { bookValidationSchema } from '../../validation/bookValidationSchema.js';
import toast from 'react-hot-toast';

const BookForm = ({ avatar, name, closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookValidationSchema),
    defaultValues: {
      form: 'career',
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
    <div className={s.container}>
      <button className={s.closeBtn} onClick={closeModal}>
        <svg className={s.closeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <h2 className={s.formTitle}>Book trial lesson</h2>
      <p className={s.formText}>
        Our experienced tutor will assess your current language level, discuss your learning goals,
        and tailor the lesson to your specific needs.
      </p>
      <div className={s.infoWrapper}>
        <img src={avatar} alt="Avatar" width="44" height="44" className={s.img} />
        <div className={s.nameWrapper}>
          <p className={s.nameText}>Your teacher</p>
          <p className={s.teacherName}>{name}</p>
        </div>
      </div>
      <h3 className={s.formSubtitle}>What is your main reason for learning English?</h3>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={s.fieldset}>
          <legend className={s.legend}></legend>
          <div className={s.radioWrapper}>
            <label className={s.radioLabel} htmlFor="career">
              <input
                type="radio"
                value="career"
                {...register('form')}
                className={clsx(s.radio, s.visuallyHidden)}
                id="career"
                name="form"
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
                {...register('form')}
                className={clsx(s.radio, s.visuallyHidden)}
                id="kids"
                name="form"
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
                {...register('form')}
                className={clsx(s.radio, s.visuallyHidden)}
                id="abroad"
                name="form"
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
                {...register('form')}
                className={clsx(s.radio, s.visuallyHidden)}
                id="exams"
                name="form"
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
                {...register('form')}
                className={clsx(s.radio, s.visuallyHidden)}
                id="culture"
                name="form"
              />
              <div className={s.customRadio}>
                <div className={s.radioCircle}></div>
              </div>
              Culture, travel or hobby
            </label>
          </div>
          <div className={s.radioErrorContainer}>
            {errors.form && <p className={s.error}>{errors.form.message}</p>}
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
    </div>
  );
};

export default BookForm;
