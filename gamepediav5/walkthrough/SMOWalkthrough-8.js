import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import ReactPlayer from 'react-player'
import axios from 'axios';

export default class MetroKingdomMoons extends React.Component {

    constructor() {
    super();
    this.state = {
      apod: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>


        
        <ScrollView>
        <View style = {{marginRight:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('SMOWalkthrough')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Super Mario Odyssey</Text>

<Image
source = {require('../assets/SMOWalkthrough8.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Metro Kingdom is one of the biggest kingdoms you will encounter in Super Mario Odyssey. Here in New Donk City, you must first stop Mecha-Wiggler from draining all the city's power. Then you must bring back all the power in time for the New Donk City Festival for the city's mayor Pauline. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 12: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 32: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 33: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 34: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 35: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 36: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 37: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 38: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 39: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 40: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 41: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 42: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 43: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 44: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 45: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 46: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 47: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 48: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 49: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 50: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 51: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 52: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 53: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 54: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 55: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 56: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 57: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 58: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 59: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 60: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 61: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 62: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 63: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 64: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 65: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 66: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 67: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 68: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 69: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 70: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 71: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 72: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 73: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 74: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 75: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 76: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 77: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 78: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 79: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 80: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 81: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#E11200',
  },
  titleContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'bold',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20
  },
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  topicTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20,
    marginTop:20
  },
  walkthroughInstruction:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
});
