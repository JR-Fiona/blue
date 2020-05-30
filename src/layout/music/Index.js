import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MainTemplate from '../../components/Template';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from 'react-native-elements';

import {convertSize} from '../../assets/js/util';

const refresh = require('../../assets/img/radioMusic/refresh.png');
const prev = require('../../assets/img/radioMusic/prev.png');
const play = require('../../assets/img/radioMusic/play.png');
const pause = require('../../assets/img/radioMusic/pause.png');
const next = require('../../assets/img/radioMusic/next.png');
const voice_nor = require('../../assets/img/radioMusic/voice_nor.png');
const voice_act = require('../../assets/img/radioMusic/voice_act.png');

const styles = StyleSheet.create({
  topTitle: {
    marginBottom: convertSize(10),
    color: '#fff',
    fontWeight: '600',
    fontSize: convertSize(28),
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  decorate: {
    width: '80%',
    height: '9%',
    marginTop: convertSize(10),
    borderRadius: convertSize(6),
  },
  illustration: {
    width: '80%',
    height: '60%',
    marginTop: convertSize(10),
    marginBottom: convertSize(10),
    borderRadius: convertSize(6),
    backgroundColor: '#fff',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  slideText: {
    color: '#5a5a5a',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: convertSize(5),
  },
  icon: {
    width: convertSize(30),
    height: convertSize(30),
  },
  iconMini: {
    width: convertSize(15),
    height: convertSize(15),
  },
  iconNor: {
    width: convertSize(25),
    height: convertSize(25),
  },
});

const colors = [
  '#F9FDFE',
  '#DBE5FF',
  '#BCD0FE',
  '#96B6FE',
  '#89ABFE',
  '#6592FE',
];

export default () => {
  const topTitle = <Text style={styles.topTitle}>MUSIC</Text>;

  function Content() {
    const [value, setValue] = useState(0);
    return (
      <View style={styles.content}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={colors}
          style={styles.decorate}
        />
        <View style={styles.illustration} />
        <Slider
          style={{width: '85%'}}
          minimumValue={0}
          maximumValue={100}
          value={value}
          minimumTrackTintColor="#1a41b4"
          onValueChange={i => setValue(i)}
          maximumTrackTintColor="#5a5a5a"
          thumbStyle={{width: 15, height: 15, backgroundColor: '#3F78F9'}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.slideText}>{Math.ceil(value)}</Text>
          <Text style={styles.slideText}>{Math.ceil(100 - value)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={refresh} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={prev} style={styles.iconMini} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={play} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={next} style={styles.iconMini} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={voice_act}
              style={styles.iconNor}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return <MainTemplate topTitle={topTitle} content={<Content />} />;
};
