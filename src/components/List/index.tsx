import React from 'react';

type Props = {
  items?: { _id: string }[];
  component: React.ComponentType<any>;
  loading?: boolean;
  error?: string;
  width?: string;
};

const List: React.FC<Props> = (props) => {
  if (props.loading) {
    return <h1>...Loading</h1>;
  }

  if (props.error) {
    return <h1>...Error</h1>;
  }

  if (props.items?.length) {
    const ProductList = props.component;

    return (
      <React.Fragment>
        {props.items.map((item) => (
          <ProductList key={`item-${item._id}`} item={item} width={props.width} />
        ))}
      </React.Fragment>
    );
  }
  return null;
};

export default List;
