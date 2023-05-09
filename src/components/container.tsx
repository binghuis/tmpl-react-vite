import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { PropsWithChildren } from 'react';
import { useEffect } from 'react';

NProgress.configure({ showSpinner: false });

export type ContainerProps = {};

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children } = props;

  NProgress.start();

  useEffect(() => {
    NProgress.done();
  }, []);

  return <>{children}</>;
};

export default Container;
