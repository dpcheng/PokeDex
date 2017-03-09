import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <div>{item.name}{item.image_url}</div>
  );
};

export default ItemDetail;
