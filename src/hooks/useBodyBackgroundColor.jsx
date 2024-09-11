import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useBodyBackgroundColor = () => {
  const location = useLocation();

  useEffect(() => {
    const setBodyBackgroundColor = () => {
      switch (location.pathname) {
        case '/':
          document.body.style.backgroundColor = '#ffffff';
          break;
        case '/teachers':
          document.body.style.backgroundColor = '#f8f8f8';
          break;
        case '/favorite':
          document.body.style.backgroundColor = '#f8f8f8';
          break;
        default:
          document.body.style.backgroundColor = '#ffffff';
      }
    };

    setBodyBackgroundColor();

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [location.pathname]);
};

export default useBodyBackgroundColor;
