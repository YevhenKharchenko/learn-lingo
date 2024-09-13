import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import s from './ModalBackdrop.module.scss';

const ModalBackdrop = ({ children, onClose }) => {
  const [active, setActive] = useState(false);

  const dynamicStyle = clsx(s.backdrop, active && s.active);

  const handleCloseModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        setActive(false);
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.body.removeAttribute('style');
    };
  }, [handleCloseModal]);

  return (
    <div className={dynamicStyle} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
