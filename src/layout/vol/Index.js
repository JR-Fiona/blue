import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Circular from '../../components/Circular';

import {convertSize} from '../../assets/js/util';

const styles = StyleSheet.create({
  firstRow: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '45%',
    paddingTop: convertSize(30),
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '57%',
  },
});

export default () => {
  const [fill1, setFill1] = useState(0);
  function updateFill1(num) {
    if (fill1 >= 5 && fill1 <= 95) {
      setFill1(() => fill1 + num);
    }
    if ((fill1 === 0 && num > 0) || (fill1 === 100 && num < 0)) {
      setFill1(() => fill1 + num);
    }
  }
  const [fill2, setFill2] = useState(0);
  function updateFill2(num) {
    if (fill2 >= 5 && fill2 <= 95) {
      setFill2(() => fill2 + num);
    }
    if ((fill2 === 0 && num > 0) || (fill2 === 100 && num < 0)) {
      setFill2(() => fill2 + num);
    }
  }
  const [fill3, setFill3] = useState(0);
  function updateFill3(num) {
    if (fill3 >= 5 && fill3 <= 95) {
      setFill3(() => fill3 + num);
    }
    if ((fill3 === 0 && num > 0) || (fill3 === 100 && num < 0)) {
      setFill3(() => fill3 + num);
    }
  }
  return (
    <>
      <View style={styles.firstRow}>
        <Circular
          size={200}
          title={'MASTER VOLUMN'}
          fill={fill1}
          updateFill={updateFill1}
        />
      </View>
      <View style={styles.secondRow}>
        <Circular
          size={180}
          title={'BASS'}
          fill={fill2}
          updateFill={updateFill2}
        />
        <Circular
          size={180}
          title={'TREBLE'}
          fill={fill3}
          updateFill={updateFill3}
        />
      </View>
    </>
  );
};
