import * as React from 'react';
import { StyleSheet, Button, Platform, TouchableOpacity, ScrollView, View, Text } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const isAndroid = Platform.OS === 'android'
  function x() {
    console.log(Platform.OS)
  }

  const customView = <View style={styles.box}><Text style={styles.txt}>1</Text></View>

  return (
    <View style={styles.container}>

      <ScrollView >
        {
          isAndroid ? <Button title="+" />

            :
            (
              <TouchableOpacity onPress={x} style={{ backgroundColor: 'red' }}>
                <Text style={{ backgroundColor: 'transparent' }}>print device os </Text>
              </TouchableOpacity>
            )
        }

        <Text style={{ color: 'white', fontSize: 22, }} >dkjfdkjf</Text>
        <View style={styles.boxContainer} >
          <View style={styles.box}><Text style={styles.txt}>1</Text></View>
          <View style={styles.box}><Text style={styles.txt}>2</Text></View>
          <View style={styles.box}><Text style={styles.txt}>3</Text></View>
        </View>

        <View >
          {
            [1, 2, 3, 4, 5, 6, 7].map(item => customView)
          }

        </View>

      </ScrollView>
      <TouchableOpacity onPress={x} style={styles.btn}>
        <Text style={{ backgroundColor: 'transparent' }}>print device os </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={x} style={styles.btn2}>
        <Text style={{ backgroundColor: 'red' }}>+</Text>
      </TouchableOpacity> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    marginVertical: 4,
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    // color: 'red'
    // backgroundColor: 'red',
    // backgroundColor: 'transparent',
    // alignSelf: 'center',
    // textAlign: 'center',
    // height: '100%'
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 8,
    // width: 50,
    // height: 50,
    zIndex: 2,


    // borderRadius: 25,
  },
  btn2: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'blue',
    padding: 8,
    width: 50,
    height: 50,
    // borderRadius: 25,
  }
});
