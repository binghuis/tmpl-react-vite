import { Divider } from 'antd';
import { PropsWithChildren } from 'react';

export type ContainerProps = { title?: string };

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, title } = props;

  return (
    <div className="bg-white p-4">
      <div className="text-base">{title}</div>
      <Divider />
      {children}
    </div>
  );
};

export default Container;
