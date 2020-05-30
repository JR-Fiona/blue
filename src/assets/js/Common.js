import {convertSize} from './util';

const color = {
  mainColor: '#1A41B4',
};

const length = {
  statusBarHeight: 34,
};

const header = {
  source: require('../img/common/topbg.jpg'),
  style: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
};

const hitSlop = {
  top: 10,
  left: 10,
  bottom: 10,
  right: 10,
};

export {color, length, header, hitSlop};
