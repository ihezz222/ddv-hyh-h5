import React from 'react';
import classnames from 'classnames';

interface ILayoutAppProps {
  header?: JSX.Element;
  content?: JSX.Element;
  footer?: JSX.Element;
}

const LayoutApp = function(props: ILayoutAppProps): JSX.Element {
  const { header, content, footer } = props;
  const $headerCls = classnames('ddv-header');
  const $contentCls = classnames('ddv-content');
  const $footerCls = classnames('ddv-footer');
  return (
    <React.Fragment>
      <div className={$headerCls}>{header}</div>
      <div className={$contentCls}>{content}</div>
      <div className={$footerCls}>{footer}</div>
      {/* {header ?  : null}
      {content ?  : null}
      {footer ?  : null} */}
    </React.Fragment>
  );
};

export default LayoutApp;
