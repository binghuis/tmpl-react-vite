import { message } from '@/components/antd-static';
import Container from '@/components/container';
import Page from '@/components/page';
import { useEffect } from 'react';

const PageHome = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    message.success('登录成功');
    // navigate('/');
  }, []);
  return (
    <Page title="Home">
      <Container title="首页">Home</Container>
    </Page>
  );
};
export default PageHome;
