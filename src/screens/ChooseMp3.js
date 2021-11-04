import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const ChooseMp3 = () => {
  const [number, setNumber] = React.useState(1);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('Home', {song: number})
  };
  return (
    <View styles={styles.wrapperAll}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Chọn bài hát</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.number1}>Bài số</Text>
        <Text style={styles.number}>{number}</Text>
        <View style={styles.raw}>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => setNumber(1)}>
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => setNumber(2)}>
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => setNumber(3)}>
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.raw1}>
          <TouchableOpacity style={styles.buttonNumber1} >
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => setNumber(4)}>
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => setNumber(5)}>
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.raw1}>
          <View style={styles.buttonNumber1} >
          </View>
          <View style={styles.buttonNumber1} >
          </View>
          <TouchableOpacity style={styles.buttonNumber2} onPress={() => setNumber(6)}>
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.textButton}>Chọn bài</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperAll: {
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
    height: 80,
  },
  textHeader: {
    fontSize: 40,
    color: 'white',
    marginTop: 10,
  },
  container: {},
  number: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  number1:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginHorizontal: 50,
    marginTop: 100,
  },
  textButton: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  raw: {
    flexDirection: 'row',
  },
  raw1:{
    flexDirection: 'row',
    marginTop: 10
  },
  buttonNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
  },
  buttonNumber1:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
  },
  buttonNumber2:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 80,
    backgroundColor: 'gray',
  }
});

export default ChooseMp3;
