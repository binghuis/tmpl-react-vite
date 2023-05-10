import useIsMounted from '@/hooks/use-is-mounted';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { PropsWithChildren } from 'react';
import { useEffect } from 'react';

NProgress.configure({ showSpinner: false });

export type PageProps = {};

const Page = (props: PropsWithChildren<PageProps>) => {
  const { children } = props;
  const isMounted = useIsMounted();

  if (!isMounted()) {
    NProgress.start();
  }

  useEffect(() => {
    NProgress.done();
  }, []);

  return <>{children}</>;
};

export default Page;
