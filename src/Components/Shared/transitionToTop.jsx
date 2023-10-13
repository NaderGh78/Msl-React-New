import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*======================================*/
/*======================================*/
/*======================================*/

const TransitionToTop = () => {

  const { pathname ,id} = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname,id]);

}

export default TransitionToTop;