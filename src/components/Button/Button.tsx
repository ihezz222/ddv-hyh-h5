import React from 'react';
import classnames from 'classnames';

interface IButtonProps {
  type?: '' | 'primary';
  className?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: () => any;
}

const $prefixCls = 'ddv-btn';

function Button(props: IButtonProps & React.Props<{}>): JSX.Element {
  const { type, disabled, onClick, className } = props;
  const $classnames = classnames($prefixCls, className, {
    [`${$prefixCls}-${type}`]: !!type,
    [`${$prefixCls}-disabled`]: disabled,
  });
  return (
    <button className={$classnames} type={'button'} disabled={disabled} onClick={onClick}>
      {props.children}
    </button>
  );
}

export default Button;
