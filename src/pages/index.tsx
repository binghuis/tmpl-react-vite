import Page from '@/components/page';
import { Link } from '@/router';

const DemoPage = () => {
  return (
    <Page>
      <Link to={'/demo'}>index</Link>
    </Page>
  );
};
export default DemoPage;
