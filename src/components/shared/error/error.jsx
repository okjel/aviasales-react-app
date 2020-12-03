import { notification } from 'antd';
import { debounce } from 'lodash';

const KEY_ERROR = 'error';

const close = debounce(() => notification.close(KEY_ERROR), 2000);

export default (isShow) => {
  if (isShow) {
    notification.error({
      duration: 0,
      message: 'Ошибка загрузки данных',
      key: KEY_ERROR,
    });
  }

  if (!isShow) close();
};
