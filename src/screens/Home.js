import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player'

const Home = ({route}) => {
    const navigation = useNavigation()
    const [number, setNumber] = React.useState(1);
    const chooseMp3 = () => {
        navigation.navigate('ChooseMp3')
    }

    useEffect(() =>{
        loadMp3(number)
    },[])

    useEffect(() => {
        if(route?.params?.song){
            setNumber(route?.params?.song)
            loadMp3(route?.params?.song)
        }
    }, [route])

    const loadMp3 = (id) => {
        try {
            console.log('id: ', id)
            SoundPlayer.loadSoundFile(`bai${id}`, 'mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    
    const playMp3 = () => {
        try {
            SoundPlayer.playSoundFile(`bai${number}`, 'mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    const pause = () => {
        try {
            SoundPlayer.pause()
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
  return (
    <View styles={styles.wrapperAll}>
        <Text style={styles.title}>NGHE NHAC</Text>
        <Text style={styles.number1}>Bài số</Text>
        <Text style={styles.number}>{number}</Text>
      <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.button} onPress={chooseMp3}>
          <Text style={styles.textButton}>Chọn bài</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={playMp3}>
          <Text style={styles.textButton}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pause}>
          <Text style={styles.textButton}>Pause</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperAll: {
    flex: 1,
    paddingTop: 20
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 400
  },
  textButton: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  container: {
  },
  button:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
      padding: 10,
  },
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
});

export default Home;
