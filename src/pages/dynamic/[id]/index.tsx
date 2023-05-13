import Page from '@/components/page';
import { Link, useParams } from '@/router';

const DynamicIdPage = () => {
  const { id } = useParams('/dynamic/:id');
  return (
    <Page>
      路由 ID {id}
      <div>
        <Link to="/dynamic/:id/detail" params={{ id }}>
          点击跳转到路由详情
        </Link>
      </div>
    </Page>
  );
};
export default DynamicIdPage;
