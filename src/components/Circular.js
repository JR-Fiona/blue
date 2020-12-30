import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {convertSize} from '../assets/js/util';
import {hitSlop} from '../assets/js/Common';

const circular = require('../assets/img/common/circle.png');

function Circular(props) {
  const {size, title, fill, updateFill} = props;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    title: {
      color: '#fff',
    },
    up: {
      position: 'absolute',
      top: size === 200 ? convertSize(120) : convertSize(108),
      right: -9,
      color: '#fff',
      fontSize: 16,
    },
    down: {
      position: 'absolute',
      top: size === 200 ? convertSize(120) : convertSize(108),
      left: -9,
      color: '#fff',
      fontSize: 16,
    },
  });
  // 25deg 为 0，280deg 为 100
  const computeRotate = num => (num ? `${25 + 258 * (num / 100)}deg` : '22deg');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AnimatedCircularProgress
        size={convertSize(size)}
        width={0}
        backgroundWidth={0}
        fill={fill}>
        {() => (
          <ImageBackground
            source={circular}
            style={{
              width: convertSize(size - 30),
              height: convertSize(size - 30),
              padding: convertSize(20),
            }}
            imageStyle={{transform: [{rotateZ: computeRotate(fill)}]}}>
            <TouchableOpacity onPress={() => updateFill(5)} hitSlop={hitSlop}>
              <Text style={styles.up}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateFill(-5)} hitSlop={hitSlop}>
              <Text style={styles.down}>-</Text>
            </TouchableOpacity>
          </ImageBackground>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

Circular.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  fill: PropTypes.number.isRequired,
  updateFill: PropTypes.func.isRequired,
};

export default Circular;
