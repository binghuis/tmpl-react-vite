import { Link } from '@/router';

const DemoPage = () => {
  return (
    <div>
      <Link to={'/'}>Demo</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  );
};
export default DemoPage;
