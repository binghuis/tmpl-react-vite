import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PropsWithChildren, useEffect } from 'react';
import { useIsMounted } from 'usehooks-ts';

NProgress.configure({ showSpinner: false });

export type PageProps = { title?: string };

const Page = (props: PropsWithChildren<PageProps>) => {
  const { children, title } = props;
  const isMounted = useIsMounted();

  if (!isMounted()) {
    NProgress.start();
  }

  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div>
      <div className="py-1 text-lg">{title}</div>
      {children}
    </div>
  );
};

export default Page;
