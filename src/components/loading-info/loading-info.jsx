import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './loading-info.module.scss';

const LoadingInfo = () => {
  return (
    <div className={styles.container}>
      <CircularProgress color="inherit" size={20} />
      <span>Загрузка данных...</span>
    </div>
  );
};

export default LoadingInfo;
