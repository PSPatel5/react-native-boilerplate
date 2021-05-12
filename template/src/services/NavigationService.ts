import * as React from 'react';
export const navigationRef: any = React.createRef();

export function navigate(name: string, params?: any) {
  navigationRef?.current?.navigate(name, params);
}

export function navigateAndReset(routeName: any, params?: any) {
  const navigator = navigationRef?.current;
  navigator?.reset({
    routes: [{name: routeName, ...params}],
  });
}
export function pop() {
  const navigator = navigationRef?.current;
  navigator?.goBack();
}
