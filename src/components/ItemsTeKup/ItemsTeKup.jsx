import React from 'react';
import './ItemsTekup.css';
const ItemsTeKup = ({ data }) => {
  return (
    <div className="items__tekup">
      <img src={data.img} alt="" />
      <p>{data.mess}</p>
    </div>
  );
};

export default ItemsTeKup;
