import React from 'react';
import { Alert } from 'antd';

const Error = () => {
  return <Alert message="Ошибка" description="Не загружаются данные по рейсам" type="error" showIcon />;
};

export default Error;
