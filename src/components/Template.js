import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

import {convertSize} from '../assets/js/util';
import {header} from '../assets/js/Common';

import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    width: '100%',
    height: '19%',
  },
  title: {
    fontSize: convertSize(80),
    color: '#fff',
  },
  decorateTop: {
    width: '100%',
    height: convertSize(12),
    backgroundColor: '#2354D6',
  },
  decorateBottom: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: convertSize(12),
    backgroundColor: '#2354D6',
  },
  content: {
    flex: 1,
  },
});

const colors = [
  '#052CAB',
  '#143CBB',
  '#2E58C8',
  '#41ABF9',
  '#41ABF9',
  '#41ABF9',
  '#2E58C8',
  '#143CBB',
  '#052CAB',
];

function MainTemplate(props) {
  const {topTitle, content} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={header.source} style={header.style}>
          {topTitle}
        </ImageBackground>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={styles.decorateTop}
      />
      <View style={styles.content}>{content}</View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={styles.decorateBottom}
      />
    </View>
  );
}

MainTemplate.PropTypes = {
  topTitle: PropTypes.elementType,
  content: PropTypes.elementType,
};

export default MainTemplate;
