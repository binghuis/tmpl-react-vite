import { Tooltip } from 'antd';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import './index.less';

interface RezisePaneProps {
  /** 左侧的内容 */
  leftPane: React.ReactElement;
  leftPaneClassName?: string;
  /** 右侧的内容 */
  rightPane: React.ReactElement;
  rightPaneClassName?: string;
  /** 初始值 */
  initValue?: number;
  /** 左侧最大宽度 */
  max?: number;
  /** 左侧最小宽度 */
  min?: number;
  /** 用于 localstorage 存储的 key */
  uniqueKey?: string;
}

/** 自己实现的 Resizeable Pane */
const ResizePane: React.FC<RezisePaneProps> = ({
  leftPane,
  rightPane,
  initValue = 200,
  max = 400,
  min = 180,
  leftPaneClassName = '',
  rightPaneClassName = '',
  uniqueKey = 'resize-pane',
}) => {
  const paneWidth = localStorage.getItem(uniqueKey);
  const [leftPaneWidth, setLeftPaneWidth] = useState(paneWidth ? Number(paneWidth) : initValue);
  const handleRef = useRef<HTMLDivElement>(null);
  const [isDraging, setIsDraging] = useState(false);

  useEffect(() => {
    const thisElement = handleRef.current;
    const handleResize = (e: { x: number }) => {
      if (e.x >= 0 && e.x <= max) {
        setLeftPaneWidth(e.x);
      } else if (e.x < 0) {
        setLeftPaneWidth(0);
      }
    };

    const handleMouseDown = () => {
      setIsDraging(true);
      document.addEventListener('mousemove', handleResize);
    };

    const handleMouseUp = () => {
      setIsDraging(false);
      setLeftPaneWidth((thisleftPaneWidth) => {
        if (thisleftPaneWidth < min && thisleftPaneWidth !== 0) {
          return min;
        } else {
          return thisleftPaneWidth;
        }
      });
      document.removeEventListener('mousemove', handleResize);
    };
    // 挂载所有
    thisElement?.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      // 取消挂载时清除所有 listener
      thisElement?.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [max, min]);

  /** 拖动时将值存储 */
  useEffect(() => {
    if (uniqueKey) {
      localStorage.setItem(uniqueKey, `${leftPaneWidth}`);
    }
  }, [leftPaneWidth, uniqueKey]);

  const disableSelectClassName = useMemo(() => {
    return isDraging ? 'disable-control' : '';
  }, [isDraging]);

  return (
    <div className="resizeable-pane-container">
      <div
        className={clsx(disableSelectClassName, 'left-pane ', leftPaneClassName)}
        style={{ width: leftPaneWidth }}
      >
        {leftPane}
      </div>
      <div ref={handleRef} className="handle-container">
        <div className="handle-bar" />
        <Tooltip
          title={leftPaneWidth === 0 ? '展开侧边栏' : '收起侧边栏'}
          placement="right"
          mouseLeaveDelay={0}
          mouseEnterDelay={0}
        >
          <div
            className="handle-trigger"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (leftPaneWidth === 0) {
                setLeftPaneWidth(initValue);
              } else {
                setLeftPaneWidth(0);
              }
            }}
          >
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        </Tooltip>
      </div>
      <div className={clsx(disableSelectClassName, 'right-pane', rightPaneClassName)}>
        {rightPane}
      </div>
    </div>
  );
};

export default ResizePane;
