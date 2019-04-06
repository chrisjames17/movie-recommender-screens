import React from 'react';
import 
{
   StyleSheet, 
   Text, 
   View,
   Image,
   TouchableOpacity 

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>

        </View>
        <View style={styles.dock}>
          <TouchableOpacity style={styles.dockItem }>
            <Icon name='home' size={30} style={styles.dockIcon}/>
            <Text style= {styles.dockText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockItem }>
            <Icon name='whatshot' size={30} style={styles.dockIcon}/>
            <Text style= {styles.dockText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockItem }>
            <Icon name='trending-up' size={30} style={styles.dockIcon}/>
            <Text style= {styles.dockText}>Suggestions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockItem }>
            <Icon name='search' size={30} style={styles.dockIcon}/>
            <Text style= {styles.dockText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#616161"
  },
  body:
  {
    flex: 1^
  },
  dock:
  {
    backgroundColor: "#424242",
    height: 60,
    elevation: 10,
    justifyContent:  'space-around',
    flexDirection: 'row'
  
  },
  dockText :
  {
    fontSize: 11,
    color: "#e0e0e0",
    padding: 4
  },
  dockIcon :
  {
    color: "#e0e0e0"
  },
  dockItem :
  {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
