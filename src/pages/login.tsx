import Logo from '@/assets/logo.png';
import { setToken, setUser, useAuthStore } from '@/store/auth';
import { IconLock, IconUser } from '@tabler/icons-react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

interface ILogin {
  account: string;
  password: string;
}

const PageLogin: React.FC = () => {
  const navigate = useNavigate();

  const submit = (value: ILogin) => {
    setToken('');
    setUser({});
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col">
      <img src={Logo} alt="" width={200} />
      <div className="text-lg">React Platform Template</div>
      <Form
        name="login"
        initialValues={{ account: '', password: '' }}
        className="mt-2"
        onFinish={submit}
        autoComplete="off"
      >
        <Form.Item
          label=""
          name="account"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input
            allowClear
            placeholder="账号"
            prefix={<IconUser size={16} color="gray" />}
          />
        </Form.Item>

        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password
            allowClear
            placeholder="密码"
            prefix={<IconLock size={16} color="gray" />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            className=" text-white bg-blue-400 hover:shadow-lg hover:scale-105 origin-top"
            htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PageLogin;
