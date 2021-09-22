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
import ReactPlayer from 'react-player';
import axios from 'axios';


export default class SSAWalkthrough extends React.Component {
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
            this.props.navigation.navigate('Walkthroughs')
          }}>
<Text>Return</Text>

</TouchableOpacity>



        </View>

        <View style = {{marginLeft:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('SSA')
          }}>
<Text>Game Page</Text>

</TouchableOpacity>
        </View>
        
          <View style={styles.gameScreen}>
            <Text style={styles.gameTitleText}>Skylanders: Spyro's Adventure</Text>

            <Image
              source={require('../assets/Skylanders_SA_Art.png')}
              style={{ width: 250, height: 150 }}
            />

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('ShatteredIsland');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough1.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Shattered Island</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>


            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('PerilousPastures');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough2.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Perilous Pastures</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('SkySchoonerDocks');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough3.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Sky Schooner Docks</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('StormyStronghold');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough4.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Stormy Stronghold</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('OilspillIsland');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough5.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Oilspill Island</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('DarkWaterCove');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough6.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Dark Water Cove</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('LeviathanLagoon');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough7.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Leviathan Lagoon</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CrystalEyeCastle');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough8.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Crystal Eye Castle</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('Stonetown');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough9.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Stonetown</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('TreetopTerrace');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough10.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Treetop Terrace</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('FallingForest');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough12.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Falling Forest</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('TrollWarehouse');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough13.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Treetop Terrace</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('GooFactory');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough14.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Goo Factory</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('Battlefield');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough14.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Battlefield</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CrawlingCatacombs');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough15.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Crawling Catacombs</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CadaverousCrypt');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough16.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Cadaverous Crypt</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CreepyCitadel');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough17.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Creepy Citadel</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('MolekinMine');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough18.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Molekin Mine</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('LavaLakesRailway');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough19.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Lava Lakes Railway</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('QuicksilverVault');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough20.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Quicksilver Vault</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('ArkeyanArmory');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough21.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Arkeyan Armory</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('LairofKaos');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough22.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Lair of KAOS</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('EmpireofIce');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough23.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Empire of Ice</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('PirateSeas');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough24.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Pirate Seas</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('DarklightCrypt');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough25.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Darklight Crypt</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('DragonsPeak');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough26.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Dragon's Peak</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('SSATheRuins');
              }}>
              <Image
                source={require('../assets/SSAWalkthrough27.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>The Ruins</Text>
              <Text>All Collectibles</Text>
              
            </TouchableOpacity>

            </View>
            

           
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#62B6E4',
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
  gameList: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 10,
    borderColor: 'black',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText: {
    color: 'white',
    fontFamily: 'bold',
    fontSize: 20,
  },
  game: {
    alignItems: 'center',
    marginTop: 10,
  },
});
