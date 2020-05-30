import {Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const scale = screenWidth / 375;
const convertSize = length => length * scale;

export {convertSize};
