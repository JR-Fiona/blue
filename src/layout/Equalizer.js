import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import MainTemplate from '../components/Template';
import Vol from './vol/Index';
import Eq from './eq/Index';

import {convertSize} from '../assets/js/util';

const styles = StyleSheet.create({
  topNav: {
    borderWidth: 0,
    width: convertSize(110),
    height: convertSize(30),
  },
  selectedBtn: {
    backgroundColor: '#012AA8',
  },
  selectedText: {
    color: '#fff',
  },
});

export default () => {
  const buttons = ['VOL', 'EQ'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  function updated(index) {
    setSelectedIndex(index);
  }

  const topTitle = (
    <ButtonGroup
      onPress={updated}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={styles.topNav}
      selectedButtonStyle={styles.selectedBtn}
      selectedTextStyle={styles.selectedText}
    />
  );

  return (
    <MainTemplate
      topTitle={topTitle}
      content={selectedIndex ? <Eq /> : <Vol />}
    />
  );
};
