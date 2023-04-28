import { AxiosResponse } from 'axios';

/**
 * 下载excel
 * @param res 接口返回 AxiosResponse
 *
 */
export function exportExcel(res: AxiosResponse) {
  const data = res.data;
  if (!data) {
    return;
  }

  // 获取headers中的 filename 文件名
  // 线上环境 content-disposition 需要服务端设置 Access-Control-Expose-Headers: Content-Disposition 前端才能成功获取
  const fileName = res.headers['content-disposition'].split('filename=')[1].split('.')[0];
  const blob = new Blob([data], { type: 'application/vnd.ms-excel' }); // 转换成二进制对象
  const url = window.URL.createObjectURL(blob); // 二进制对象转换成url地址
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', decodeURIComponent(fileName));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // 下载完成移除元素
  window.URL.revokeObjectURL(url); // 释放掉blob对象
}
