import React from 'react';
import classNames from 'classnames';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import DvButton from '../../components/Button/Button';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { onBack } from '../../mixins';

const $prefixCls = classNames('ddv-signup');
const $prefixClsForm = $prefixCls + '-form';
const $prefixClsFormItem = $prefixClsForm + '-item';
const $prefixClsFormSubmit = $prefixClsForm + '-submit';

function Signup(props: RouteComponentProps): JSX.Element {
  return (
    <div className={$prefixCls}>
      <HeaderNav showLeft={true} onLeft={(): void => onBack(props)}>
        注册
      </HeaderNav>
      <form className={$prefixClsForm}>
        {/* 手机号 */}
        <div className={$prefixClsFormItem}>
          <input type="text" placeholder="请输入手机号码" />
        </div>
        {/* 验证码 */}
        <div className={$prefixClsFormItem}>
          <input type="text" placeholder="请输入验证码" />
        </div>
        <DvButton className={$prefixClsFormSubmit} type={'primary'}>
          注册
        </DvButton>
      </form>
    </div>
  );
}

export default withRouter(Signup);
