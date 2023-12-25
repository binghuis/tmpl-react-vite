import { Divider, theme } from 'antd';
import { HTMLAttributes, PropsWithChildren } from 'react';

export type ContainerProps = { title?: string } & HTMLAttributes<HTMLDivElement>;

const Container = ({ children, title, ...props }: PropsWithChildren<ContainerProps>) => {
  const { useToken } = theme;

  const { token } = useToken();
  return (
    <div
      className="p-4"
      style={{
        background: token.colorBgContainer,
      }}
      {...props}
    >
      <div className="text-base">{title}</div>
      <Divider />
      {children}
    </div>
  );
};

export default Container;
