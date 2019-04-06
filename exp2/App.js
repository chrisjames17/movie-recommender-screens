import React from 'react';
import 
{ 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  Image, 
  ImageBackground,
  Dimensions
} from 'react-native';
import bgIm from './images/bg.jpg'
import logo from './images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
const {width: WIDTH } = Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={bgIm} style={styles.backC}>
        <View>
          <Image source={logo} style={styles.logoC}/>
        </View>
        <View>
          <Icon name="ios-person" size={28} color={'#80d8ff'} style={styles.inputIcon}/>
          <TextInput 
            style={styles.input}
              placeholder ={'Username or Email'}
              placeholderTextColor={'#f5f5f5'}
              underlineColorAndroid='transparent'
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backC :
  {
    flex: 1 ,
    alignItems: 'center',
    justifyContent: 'center',
    width : null,
    height: null, 
  },
  logoC :
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 180,
  },
  input :
  {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: '#9e9e9e',
    color: '#f5f5f5',
    marginHorizontal: 25,
  },
  inputIcon:
  {
    position: 'absolute',
    top: 10,
    left: 37,
    
  }
});
