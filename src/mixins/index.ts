import { RouteComponentProps } from 'react-router-dom';

export const onBack = function(content: RouteComponentProps): void {
  content.history.goBack();
};
