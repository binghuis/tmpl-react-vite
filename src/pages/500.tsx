import { Button, Result } from 'antd';
import React from 'react';

const Page404: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="抱歉，服务器出错了"
    extra={
      <Button type="primary" size="small">
        返回首页
      </Button>
    }
  />
);

export default Page404;
