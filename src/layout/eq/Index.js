import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Slider} from 'react-native-elements';

import {convertSize} from '../../assets/js/util';
import {color} from '../../assets/js/Common';

const normal_nor = require('../../assets/img/voiceSort/normal_nor.png');
const normal_act = require('../../assets/img/voiceSort/normal_act.png');
const rock_nor = require('../../assets/img/voiceSort/rock_nor.png');
const rock_act = require('../../assets/img/voiceSort/rock_act.png');
const classic_nor = require('../../assets/img/voiceSort/classic_nor.png');
const classic_act = require('../../assets/img/voiceSort/classic_act.png');
const jazz_nor = require('../../assets/img/voiceSort/jazz_nor.png');
const jazz_act = require('../../assets/img/voiceSort/jazz_act.png');
const country_nor = require('../../assets/img/voiceSort/country_nor.png');
const country_act = require('../../assets/img/voiceSort/country_act.png');
const pop_nor = require('../../assets/img/voiceSort/pop_nor.png');
const pop_act = require('../../assets/img/voiceSort/pop_act.png');
const user_nor = require('../../assets/img/voiceSort/user_nor.png');
const user_act = require('../../assets/img/voiceSort/user_act.png');
const slider_blue = require('../../assets/img/voiceSort/slider_blue.png');
const slider_yellow = require('../../assets/img/voiceSort/slider_yellow.png');

const MENU = [
  {
    title: 'NORMAL',
    icon: [normal_nor, normal_act],
  },
  {
    title: 'ROCK',
    icon: [rock_nor, rock_act],
  },
  {
    title: 'CLASSIC',
    icon: [classic_nor, classic_act],
  },
  {
    title: 'JAZZ',
    icon: [jazz_nor, jazz_act],
  },
  {
    title: 'COUNTRY',
    icon: [country_nor, country_act],
  },
  {
    title: 'POP',
    icon: [pop_nor, pop_act],
  },
  {
    title: 'USER',
    icon: [user_nor, user_act],
  },
];

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
    height: convertSize(65),
    marginTop: convertSize(20),
  },
  menuIcon: {
    width: convertSize(35),
    height: convertSize(35),
  },
  content: {
    flex: 1,
    marginTop: convertSize(30),
  },
  contentTop: {
    backgroundColor: '#000',
  },
  tag: {
    position: 'absolute',
    left: 4,
    width: 3,
    height: 20,
    backgroundColor: color.mainColor,
  },
  tagText: {
    color: '#fff',
    fontSize: convertSize(16),
    marginLeft: 12,
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: convertSize(10),
    paddingRight: convertSize(5),
  },
  slideText: {
    textAlign: 'center',
    width: convertSize(36),
    marginTop: convertSize(5),
    color: '#fff',
  },
});

export default () => {
  const [selectedMenu, setSelect] = useState(MENU[0].title);

  // 菜单
  function ItemDom(ele) {
    const {icon, title, set} = ele;
    const isSelect = title === selectedMenu;
    return (
      <TouchableWithoutFeedback onPress={() => set(title)}>
        <View style={styles.item}>
          <Image
            source={isSelect ? icon[1] : icon[0]}
            style={styles.menuIcon}
          />
          <Text
            style={{textAlign: 'center', color: isSelect ? color.mainColor : '#fff'}}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // 调节器 slider
  function MySilder(ele) {
    const [value, setValue] = useState(50);
    return (
      <View style={{flex: 1}}>
        <Slider
          style={{height: '72%'}}
          minimumValue={0}
          maximumValue={100}
          value={value}
          orientation="vertical"
          minimumTrackTintColor="#fff"
          onValueChange={i => setValue(i)}
          maximumTrackTintColor="#1a41b4"
          thumbStyle={{width: 15, height: 30, backgroundColor: '#3F78F9'}}
        />
        <Text style={styles.slideText}>{Math.ceil(100 - value)}</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.menu}>
        {MENU.map(ele => (
          <ItemDom
            key={ele.title}
            icon={ele.icon}
            title={ele.title}
            set={setSelect}
          />
        ))}
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <View style={styles.tag} />
          <Text style={styles.tagText}>{selectedMenu}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <MySilder />
          <MySilder />
          <MySilder />
          <MySilder />
          <MySilder />
          <MySilder />
          <MySilder />
          <MySilder />
        </View>
      </View>
    </>
  );
};
