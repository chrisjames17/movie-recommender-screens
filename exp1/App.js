import React from 'react';
import 
{
   StyleSheet, 
   Text, 
   View,
   Image,
   TouchableOpacity ,
   ScrollView,
   ActivityIndicator,
   FlatList

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      isLoading : false,
      dataSource : []
    }
  }

  componentDidMount()
  {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=d68422fd382ad5a51bd75ac0d8826b99/discover/movie?sort_by=popularity.desc').then(response => {
      return response.json();
    }).then((response.json => {
      this.setState(
        {
          isLoading: false,
          dataSource : response.json
        }
      )
    });
  }
  blah={item.poster_path};
  _renderItem =  ({item} => 
  {
    //<Text>{item.original_title}</Text>)
    <TouchableOpacity style={styles.leftcard}>
    <Image style={styles.imageCard} source={blah}/>
    <Text style={styles.textCard}>{item.original_title}</Text>
  </TouchableOpacity>
  })
  render() {
    if(this.state.isLoading)
    {
      return
      (
          <View style={styles.container}>
            <ActivityIndicator size="large" animating/>
          </View>
      );
    }
    else
    {
      return (
        <View style={styles.container}>
          <View style={styles.spaceC}>


          </View>
          <ScrollView style={styles.body}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
          />
          </ScrollView>
          <View style={styles.dock}>
            <TouchableOpacity style={styles.dockItem }>
              <Icon name='whatshot' size={30} style={styles.dockIconSel}/>
              <Text style= {styles.dockTextSel}>Trending</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#616161"
  },
  body:
  {
    flex: 1,
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
  dockTextSel :
  {
    fontSize: 11,
    color: "#00e676",
    padding: 4
  },
  dockIcon :
  {
    color: "#e0e0e0"
  },
  dockIconSel:
  {
    color: "#00e676"
  },
  dockItem :
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftcard :
  {
    backgroundColor: "#424242",
    marginBottom: 10,
    marginLeft: '1%',
    marginRight: '1%',
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30
  },
  imageCard:
  {
    width: '100%',
    height:200,
    resizeMode: 'cover',

  },
  textCard:
  {
    padding: 10,
    fontSize: 16,
  },
  spaceC:
  {
    height: 30,
  },
  ri8card:
  {
    backgroundColor: "#424242",
    marginBottom: 10,
    marginLeft: '50%',
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
     },
    }
});
