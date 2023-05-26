import { useNavigate } from '@/router';
import { Button, Result } from 'antd';
import React from 'react';

const Page404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的路径不存在"
      extra={
        <Button
          onClick={() => {
            navigate('/');
          }}
          type="primary"
          size="small"
        >
          返回首页
        </Button>
      }
    />
  );
};

export default Page404;
