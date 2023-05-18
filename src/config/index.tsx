import { Path } from '@/router';
import { matchPath } from 'react-router-dom';

/** 无须鉴权，可直接进入的页面路径 */
export const PublicPaths: Path[] = ['/login'];
export const isPublicPath = () => {
  return PublicPaths.some((path) => matchPath(path, location.pathname));
};
