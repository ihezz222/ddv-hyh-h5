import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';

const $prefixCls = classnames('ddv-header-nav');
const $classnameL = $prefixCls + '-left';
const $classnameC = $prefixCls + '-content';
const $classnameR = $prefixCls + '-right';
interface IHeaderNavProps {
  showLeft?: boolean;
  children?: ReactNode;
  contentLeft?: JSX.Element;
  contentRight?: JSX.Element;
  onLeft?: () => void;
}

/**
 * 标题左边渲染区域
 * @param props 组件属性
 */
const RenderNavLeft = function(props: IHeaderNavProps): JSX.Element | null {
  const { showLeft, onLeft } = props;
  return !showLeft ? null : (
    <div className={$classnameL} onClick={onLeft}>
      <Icon type="ddv-left"></Icon>
    </div>
  );
};

/**
 * 标题中间区域
 * @param props 组件属性
 */
const RenderNavConent = function(props: IHeaderNavProps): JSX.Element | null {
  const { children } = props;
  return !!!children ? null : <div className={$classnameC}>{children}</div>;
};

/**
 * 标题右边区域
 * @param props 组件属性
 */
const RenderNavRight = function(props: IHeaderNavProps): JSX.Element | null {
  const { contentRight } = props;
  return !!!contentRight ? null : <div className={$classnameR}>{contentRight}</div>;
};

export default function HeaderNav(props: IHeaderNavProps): JSX.Element {
  return (
    <div className={$prefixCls}>
      {RenderNavLeft(props)}
      {RenderNavConent(props)}
      {RenderNavRight(props)}
    </div>
  );
}
