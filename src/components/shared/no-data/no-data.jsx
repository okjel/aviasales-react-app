import React from 'react';
import { Empty } from 'antd';
import styles from './no-data.module.scss';

const NoData = () => {
  return (
    <div className={styles.container}>
      <Empty description="Рейсов, подходящих под заданные фильтры, не найдено" />
    </div>
  );
};

export default NoData;
