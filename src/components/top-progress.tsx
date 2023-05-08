import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TopProgress = (props: React.PropsWithChildren) => {
  const { children = null } = props;
  const location = useLocation();
  NProgress.configure({ showSpinner: false });
  NProgress.start();

  useEffect(() => {
    NProgress.done();
  }, [location]);

  return <>{children}</>;
};

export default TopProgress;
