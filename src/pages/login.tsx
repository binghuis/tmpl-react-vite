import Logo from '@/assets/logo.png';
import Icon from '@/components/icon-font';
import { ThemeToggler } from '@/components/theme-toggler';
import { ThemeContext } from '@/context/theme';
import { useAuthStore } from '@/stores/auth';
import { Button, Form, Input, theme } from 'antd';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export interface LoginForm {
  account: string;
  password: string;
}

const PageLogin: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [form] = Form.useForm();
  const [isFormValid, setFormValid] = useState<boolean>();

  const submit = () => {
    form.validateFields().then((formval) => {
      login(formval).then((code) => {
        if (code === 'success') {
          navigate('/');
        }
      });
    });
  };

  const handleChange = (_: unknown, val: LoginForm) => {
    const invalid = Object.values(val).some((v) => {
      return v === undefined || v === '';
    });
    setFormValid(!invalid);
  };
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      className="flex h-screen w-screen items-center justify-center"
      style={{
        background: token.colorBgContainer,
      }}
    >
      <div>
        <ThemeToggler onChange={toggleTheme} checked={isDark} size={32} />

        <div className="mx-auto w-40">
          <img src={Logo} alt="" width="100%" />
        </div>
        <Form
          form={form}
          name="login"
          initialValues={{ account: '', password: '' }}
          className="mt-2"
          onFinish={submit}
          autoComplete="off"
          onValuesChange={handleChange}
        >
          <Form.Item label="" name="account" rules={[{ required: true, message: '请输入账号' }]}>
            <Input
              allowClear
              placeholder="账号"
              className="h-10"
              prefix={<Icon type="user" size={16} />}
            />
          </Form.Item>

          <Form.Item label="" name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password
              allowClear
              placeholder="密码"
              className="h-10"
              prefix={<Icon type="lock" size={16} />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              disabled={!isFormValid}
              onClick={submit}
              className={`${isFormValid ? 'hover:scale-105 hover:shadow-lg' : ''} h-10 origin-top`}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default PageLogin;
