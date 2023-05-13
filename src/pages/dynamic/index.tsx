import Page from '@/components/page';
import { Link } from '@/router';

const DynamicPage = () => {
  return (
    <Page>
      <h1>dynamic</h1>
      <div>
        <Link to="/dynamic/:id" params={{ id: `${Date.now()}` }}>
          点击跳转到动态路由 ID
        </Link>
      </div>
      <div>
        <Link to="/related">点击跳转到绑定路由</Link>
      </div>
    </Page>
  );
};
export default DynamicPage;
