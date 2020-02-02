import React from 'react';
import FooterNav, { IMenuItem } from './components/FooterNav/FooterNav';
import LayoutApp from './components/Layout/LayoutApp';
import BasicRoute from './router';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const navList: IMenuItem[] = [
  {
    name: '首页',
    icon: 'ddv-zhuye',
    path: '/',
  },
  {
    name: '商品',
    icon: 'ddv-feilei',
    path: '/goods',
  },
  {
    name: '购物车',
    icon: 'ddv-gouwu',
    path: '/cart',
  },
  {
    name: '我的',
    icon: 'ddv-me',
    path: '/me',
  },
];

/**
 * @description: 底部导航组件
 * @param {props} 路由上下文
 * @return: JSX.Element
 */
const RenderFooterNav = (props: RouteComponentProps): JSX.Element | null => {
  const { history, location } = props;
  const currentIndex = navList.findIndex(item => item.path === location.pathname);
  function onClickRouter(item: IMenuItem): void {
    history.push(item.path);
  }
  return currentIndex !== -1 ? <FooterNav data={navList} currentIndex={currentIndex} onClick={onClickRouter} /> : null;
};

class App extends React.Component<RouteComponentProps> {
  render(): JSX.Element {
    return (
      <div className="ddv-layout">
        <LayoutApp content={BasicRoute()} footer={RenderFooterNav(this.props)} />
      </div>
    );
  }
}

export default withRouter(App);
