import Container from '@/components/container';
import { Link } from '@/router';

const DemoPage = () => {
  return (
    <Container>
      <Link to={'/'}>Demo</Link>
      <Link to={'/login'}>Login</Link>
    </Container>
  );
};
export default DemoPage;
