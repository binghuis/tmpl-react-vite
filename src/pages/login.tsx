import Container from '@/components/container';
import { Link } from '@/router';

const DemoPage = () => {
  return (
    <Container>
      <Link to={'/demo'}>login</Link>
    </Container>
  );
};
export default DemoPage;
