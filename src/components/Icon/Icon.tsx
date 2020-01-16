import React from 'react';
import classnames from 'classnames';

export interface IIconProps {
  type: string;
}

const $prefixCls = 'ddv-icon';

const Icon = function(props: IIconProps): JSX.Element {
  const { type } = props;
  const classname = classnames($prefixCls, type);
  return <i className={classname} />;
};

export default Icon;
