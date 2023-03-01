import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ItemsTeKup from '../../ItemsTeKup/ItemsTeKup';
import './Container.css';
const listDatasTitle = [
  {
    title: 'All',
  },
  {
    title: 'Manpower Supply',
  },
  {
    title: 'Mobile App / Websites',
  },
  {
    title: 'UI/UX Design',
  },
];
const listDatas = [
  {
    img: 'https://tekup.vn/wp-content/uploads/2022/09/image-1.png',
    mess: 'TOI 3D Customize E-commerce',
  },
  {
    img: 'https://tekup.vn/wp-content/uploads/2022/09/image.png',
    mess: 'E-learning – Internal training platform',
  },
  {
    img: 'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png',
    mess: 'Summer 21 Cosmetic E-commerce Platform',
  },
  {
    img: 'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png',
    mess: 'Kiva – Ambition to digital transformation in the brokerage assiduity',
  },
  {
    img: 'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png',
    mess: 'TOI 3D Customize E-commerce',
  },
  {
    img: 'https://tekup.vn/wp-content/uploads/2022/09/image-1.png',
    mess: 'Boxgo – Professional Warehouse Management',
  },
];
const Container = () => {
  const [keyActive, setKeyActive] = useState(0);
  const handleKeyActive = (key) => {
    setKeyActive(key);
  };
  return (
    <div>
      <ul className="list__title">
        {listDatasTitle.map((data, index) => {
          return (
            <li
              className={`${index === keyActive ? 'active' : ''}`}
              onClick={() => {
                handleKeyActive(index);
              }}
              key={index}
            >
              {data.title}
            </li>
          );
        })}
      </ul>
      <Grid container spacing={2}>
        {listDatas.map((data, index) => {
          return (
            <Grid item md={4}>
              <ItemsTeKup key={index} data={data} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Container;
