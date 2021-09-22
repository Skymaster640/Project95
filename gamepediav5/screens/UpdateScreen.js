import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SearchBar} from 'react-native-elements'
import SuperMarioOdyssey from './SuperMarioOdyssey'
import Undertale from './Undertale'
import Minecraft from './Minecraft'
import SkySpyroAdventure from './SkySpyroAdventure'
import SmashBrosUltimate from './SmashBrosUltimate'

export default class HomeScreen extends React.Component {
constructor(){
    super();
    this.state ={
      allStories:[],
      dataSource:[],
      search : ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>

        <ScrollView>


        <Text style ={{alignSelf:'center'}}>Welcome back! Here are the latest updates.</Text>


          <Text style ={{alignSelf:'center',marginTop:20}}>~ Added Skylanders: Spyro's Adventure walkthroughs</Text>

        <TouchableOpacity style = {{alignSelf:'center',}}
          onPress={()=>{
            this.props.navigation.navigate('SSAWalkthrough')
          }}

          
          
          >

            <Text style ={{color:'red'}}>Click here to check it out!</Text>

          </TouchableOpacity>

          

        <Text style = {{alignSelf:'center',marginTop:20}}>~ Added search filters to Home and Walkthrough Screen.</Text>

        <Text style = {{alignSelf:'center',marginTop:20}}>~ Added Navigation between a game page and it's corresponding walkthrough page and vice-versa.</Text>

        <Text style = {{alignSelf:'center',marginTop:20}}>~ Added a working trailer link to PC users, currently doesn't work on mobile.</Text>


        <Text style ={{alignSelf:'center',marginTop:20}}>~ Added Spore game page and walkthroughs</Text>

        <TouchableOpacity style = {{alignSelf:'center',}}
          onPress={()=>{
            this.props.navigation.navigate('Spore')
          }}

          
          
          >

            <Text style ={{color:'red'}}>Click here to check out the game!</Text>

          </TouchableOpacity>

          <TouchableOpacity style = {{alignSelf:'center',}}
          onPress={()=>{
            this.props.navigation.navigate('SporeWalkthrough')
          }}

          
            
          >

            <Text style ={{color:'red'}}>Click here to check out the walkthroughs!</Text>

          </TouchableOpacity>

          <Text style ={{alignSelf:'center',marginTop:20}}>~ Added Plants vs. Zombies game page and walkthroughs</Text>

        <TouchableOpacity style = {{alignSelf:'center',}}
          onPress={()=>{
            this.props.navigation.navigate('PvZ')
          }}

          
          
          >

            <Text style ={{color:'red'}}>Click here to check out the game!</Text>

          </TouchableOpacity>

          <TouchableOpacity style = {{alignSelf:'center',}}
          onPress={()=>{
            this.props.navigation.navigate('PVZWalkthrough')
          }}

          
            
          >

            <Text style ={{color:'red'}}>Click here to check out the walkthroughs!</Text>

          </TouchableOpacity>

          <Text style ={{alignSelf:'center',marginTop:20}}>~ Added Pokemon HeartGold and SoulSilver game page</Text>

        <TouchableOpacity style = {{alignSelf:'center',}}
          onPress={()=>{
            this.props.navigation.navigate('PHGSS')
          }}

          
          
          >

            <Text style ={{color:'red'}}>Click here to check it out!</Text>

          </TouchableOpacity>

          

        <View style = {{alignSelf: 'center',borderRadius:9,borderColor:'black',backgroundColor:'white',marginTop:40}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Home')
          }}>
<Text>Continue</Text>

</TouchableOpacity>
        </View>
        
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'cyan',
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

});
