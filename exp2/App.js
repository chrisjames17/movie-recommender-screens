import React from 'react';
import 
{ 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  Image, 
  ImageBackground,
  Dimensions,
  TouchableOpacity
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
         
          <TextInput 
            style={styles.input}
              placeholder ={'Username or Email'}
              placeholderTextColor={'#424242'}
              underlineColorAndroid='transparent'
          />
          <TextInput 
            style={styles.input}
              placeholder ={'Password'}
              placeholderTextColor={'#424242'}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.btLogin}>
            <Text style={styles.logText}>Login</Text>
          </TouchableOpacity>
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
    width: 180,
    height: 180,
    marginBottom: 10,
    
  },
  input :
  {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: '#fafafa',
    color: '#212121',
   
    paddingLeft: 45,
    justifyContent:  'center',
    marginTop: 20,
  
  
  },
  inputIcon:
  {
    position: 'absolute',
    top: 10,
    left: 37,
    
  },
  btLogin:
  {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#4db6ac',
    alignItems: 'center',
    justifyContent:  'center',
    marginTop: 40,
    marginLeft: 97,
    elevation : 10
  },
  logText:
  {
    color: '#fafafa',
    fontSize: 16,
    textAlign: 'center',
  
  }
});
