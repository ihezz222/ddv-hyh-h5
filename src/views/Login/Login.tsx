import React, { useState } from 'react';
import Icon from '../../components/Icon/Icon';
import DdvButton from '../../components/Button/Button';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

interface ILoginState {
  username: string;
  password: string;
}

const onClickSubmit = function(props: RouteComponentProps, formData: ILoginState): void {
  console.log(formData);
  // props.history.push('/');
};

const Login = function(props: RouteComponentProps): JSX.Element {
  const $prefixCls = 'ddv-login';
  const $prefixForm = $prefixCls + '-form';
  const $prefixFormItem = $prefixForm + '-item';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={$prefixCls}>
      <p className={$prefixCls + '-code-submit'}>
        免密登录<Icon type={'ddv-right'}></Icon>
      </p>
      <h2 className={$prefixCls + '-title'}>欢迎登录</h2>
      <form className={$prefixForm}>
        <div className={$prefixFormItem}>
          <input
            type="text"
            placeholder={'手机号/用户名'}
            value={username}
            onChange={(event): void => setUsername(event.target.value)}
          />
        </div>
        <div className={$prefixFormItem}>
          <input
            type="password"
            placeholder={'密码'}
            value={password}
            onChange={(event): void => setPassword(event.target.value)}
          />
        </div>
        <p className={$prefixCls + '-forget-pasworld'}>忘记密码？</p>
        <div className={$prefixForm + '-submit'}>
          <DdvButton type={'primary'} onClick={(): void => onClickSubmit(props, { username, password })}>
            登录
          </DdvButton>
        </div>
      </form>
      <p className={$prefixCls + '-logout-account'}>
        还没有账号？<Link to={'/signup'}>立即注册</Link>
      </p>
    </div>
  );
};

export default withRouter(Login);
