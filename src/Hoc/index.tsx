import React from 'react';

type WithComponentProps = {};

function WithComponent<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof WithComponentProps>) => {
    const [loading, SetLoading] = React.useState<boolean>(false);

    if (loading) {
      return <h1>...Loading</h1>;
    }

    return <Component {...(props as T)} />;
  };
}

export default WithComponent;
