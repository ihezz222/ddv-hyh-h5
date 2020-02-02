import React from 'react';
import classnames from 'classnames';
import { setKeys } from '../../utils/tools';
import Icon from '../Icon/Icon';

export interface IMenuItem {
  name: string;
  icon: string;
  path: string;
}

interface IMenuItemProps {
  data: IMenuItem[];
  currentIndex: number;
  onClick: (p1: IMenuItem) => void;
}

interface IMenuItemStore {
  currentNav: string;
}

const $prefixCls = 'ddv-footer-nav';

/**
 * @description: 导航菜单项
 * @param {type} 组件属性
 * @return: JSX.Element[]
 */
const RenderNavItem = function(props: IMenuItemProps): JSX.Element[] {
  const { data, currentIndex, onClick } = props;

  const $prefix = $prefixCls + '-item';
  return data.map((item, index) => {
    const classname = classnames($prefix, {
      [`${$prefix}-active`]: index === currentIndex,
    });
    return (
      <li className={classname} key={setKeys($prefix, index)} onClick={(): void => onClick(item)}>
        <Icon type={item.icon}></Icon>
        <p>{item.name}</p>
      </li>
    );
  });
};

export default class FooterNav extends React.Component<IMenuItemProps, IMenuItemStore> {
  public state = {
    currentNav: '',
  };

  public render(): React.ReactNode {
    const classname = classnames($prefixCls);
    return <ul className={classname}>{RenderNavItem(this.props)}</ul>;
  }
}
