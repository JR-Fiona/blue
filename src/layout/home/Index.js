import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MainTemplate from '../../components/Template';

import {useNavigation} from '@react-navigation/native';
import {convertSize} from '../../assets/js/util';

const namePic = require('../../assets/img/home/name.png');
const bluetooth_active = require('../../assets/img/home/bluetooth.png');
const card_reader = require('../../assets/img/home/card.png');
const memory_card = require('../../assets/img/home/memory.png');
const connect_line = require('../../assets/img/home/line.png');
const fm = require('../../assets/img/home/fm2.png');
const music = require('../../assets/img/home/music2.png');

const styles = StyleSheet.create({
  topName: {
    width: convertSize(120),
    height: convertSize(90),
  },
  first: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '32%',
    paddingTop: convertSize(30),
    // backgroundColor: '#fff',
  },
  bluetoothIcon: {
    width: convertSize(105),
    height: convertSize(105),
  },
  second: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '16%',
    // backgroundColor: 'red',
  },
  funcIcon: {
    width: convertSize(85),
    height: convertSize(85),
    borderRadius: convertSize(5),
    padding: 3,
    // opacity: 0.8,
    // backgroundColor: '#fff',
  },
  third: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '16%',
    // backgroundColor: 'green',
  },
  forth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '16%',
    // backgroundColor: 'yellow',
  },
});

export default () => {
  const navigation = useNavigation();
  const topTitle = (
    <Image source={namePic} style={styles.topName} resizeMode="contain" />
  );

  const content = (
    <>
      <View style={styles.first}>
        <TouchableOpacity>
          <Image
            source={bluetooth_active}
            style={styles.bluetoothIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.second}>
        <TouchableOpacity>
          <Image
            source={card_reader}
            style={styles.funcIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={memory_card}
            style={styles.funcIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.third}>
        <TouchableOpacity onPress={() => navigation.navigate('home/music')}>
          <Image source={music} style={styles.funcIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.forth}>
        <TouchableOpacity>
          <Image
            source={connect_line}
            style={styles.funcIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={fm} style={styles.funcIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </>
  );

  return <MainTemplate topTitle={topTitle} content={content} />;
};
