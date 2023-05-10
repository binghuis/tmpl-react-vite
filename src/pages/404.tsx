import Page from '@/components/page';
import { Link } from '@/router';

const DemoPage = () => {
  return (
    <Page>
      <Link to={'/demo'}>404</Link>
    </Page>
  );
};
export default DemoPage;
