import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class HomeCC extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextI
        <View style={styles.abc}>
          <View style={styles.box1} />
          <View style={styles.box2} />
        </View>
        <Text style={styles.textstyle}>Sri lanka cricket</Text>
        <Image style={styles.teamphoto} source={require('../src/345692.png')} />
        <Image style={styles.teamwin} source={require('../src/abc.webp')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'baseline',
    // flexDirection: 'column-reverse',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  textstyle: {
    fontSize: 30,
    color: 'red',
  },
  teamphoto: {
    width: 350,
    height: 150,
  },
  teamwin: {
    width: 350,
    height: 150,
  },
  abc: {
    // flexDirection: 'row',
  },
});
export default HomeCC;
