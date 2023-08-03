import { Divider, theme } from 'antd';
import { PropsWithChildren } from 'react';

export type ContainerProps = { title?: string };

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { useToken } = theme;

  const { children, title } = props;
  const { token } = useToken();
  return (
    <div
      className="p-4"
      style={{
        background: token.colorBgContainer,
      }}
    >
      <div className="text-base">{title}</div>
      <Divider />
      {children}
    </div>
  );
};

export default Container;
