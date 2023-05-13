import Page from '@/components/page';
import { useParams } from '@/router';

const DynamicIdPage = () => {
  const { id } = useParams('/dynamic/:id/detail');
  return <Page>动态路由 {id} 详情</Page>;
};
export default DynamicIdPage;
