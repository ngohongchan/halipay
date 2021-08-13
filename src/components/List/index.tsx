import React from 'react';

type Props = {
  items?: { id: string }[];
  component: React.ComponentType<any>;
  loading: React.ComponentType<any>;
  error: React.ComponentType<any>;
};

const List: React.FC<Props> = (props) => {
  if (props.loading) {
    return <h1>...Loading</h1>;
  }

  if (props.error) {
    return <h1>...Error</h1>;
  }

  if (props.items?.length) {
    const ListItem = props.component;

    return (
      <React.Fragment>
        <div className='row'>
          {props.items.map((item) => (
            <ListItem key={`item-${item.id}`} item={item} />
          ))}
        </div>
      </React.Fragment>
    );
  }
  return null;
};

export default List;
