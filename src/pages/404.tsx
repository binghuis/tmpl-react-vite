import Container from '@/components/container';
import { Link } from '@/router';

const DemoPage = () => {
  return (
    <Container>
      <Link to={'/demo'}>404</Link>
    </Container>
  );
};
export default DemoPage;
