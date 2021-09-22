import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import HomeAlphabet from './screens/HomeScreenAlphabetfilter';
import HomeRelease from './screens/HomeScreenReleasefilter';
import WalkthroughSearch from './screens/WalkthroughSearch';
import WalkthroughAlphabet from './screens/WalkthroughSearchAlphabetFilter';
import WalkthroughRelease from './screens/WalkthroughSearchReleasefilter';
import Updates from './screens/UpdateScreen';
import SuperMarioOdyssey from './screens/SuperMarioOdyssey';
import Undertale from './screens/Undertale';
import Minecraft from './screens/Minecraft';
import SkySpyroAdventure from './screens/SkySpyroAdventure';
import SmashBrosUltimate from './screens/SmashBrosUltimate';
import Spore from './screens/Spore'
import PlantsVsZombies from './screens/PlantsVsZombies'
import PokemonHeartGoldSoulSilver from './screens/PokemonHeartGoldSoulsilver'
import SMOWalkthrough from './screens/SMOWalkthrough';
import SMOWalkthrough1 from './walkthrough/SMOWalkthrough-1';
import SMOWalkthrough2 from './walkthrough/SMOWalkthrough-2';
import SMOWalkthrough3 from './walkthrough/SMOWalkthrough-3';
import SMOWalkthrough4 from './walkthrough/SMOWalkthrough-4';
import SMOWalkthrough5 from './walkthrough/SMOWalkthrough-5';
import SMOWalkthrough6 from './walkthrough/SMOWalkthrough-6';
import SMOWalkthrough7 from './walkthrough/SMOWalkthrough-7';
import SMOWalkthrough8 from './walkthrough/SMOWalkthrough-8';
import SMOWalkthrough9 from './walkthrough/SMOWalkthrough-9';
import SMOWalkthrough10 from './walkthrough/SMOWalkthrough-10';
import SMOWalkthrough11 from './walkthrough/SMOWalkthrough-11';
import SMOWalkthrough12 from './walkthrough/SMOWalkthrough-12';
import SMOWalkthrough13 from './walkthrough/SMOWalkthrough-13';
import SMOWalkthrough14 from './walkthrough/SMOWalkthrough-14';
import SMOWalkthrough15 from './walkthrough/SMOWalkthrough-15';
import SMOWalkthrough16 from './walkthrough/SMOWalkthrough-16';
import SMOWalkthrough17 from './walkthrough/SMOWalkthrough-17';
import SSAWalkthrough1 from './walkthrough/SSAWalkthrough-1';
import SSAWalkthrough2 from './walkthrough/SSAWalkthrough-2';
import SSAWalkthrough3 from './walkthrough/SSAWalkthrough-3';
import SSAWalkthrough4 from './walkthrough/SSAWalkthrough-4';
import SSAWalkthrough5 from './walkthrough/SSAWalkthrough-5';
import SSAWalkthrough6 from './walkthrough/SSAWalkthrough-6';
import SSAWalkthrough7 from './walkthrough/SSAWalkthrough-7';
import SSAWalkthrough8 from './walkthrough/SSAWalkthrough-8';
import SSAWalkthrough9 from './walkthrough/SSAWalkthrough-9';
import SSAWalkthrough10 from './walkthrough/SSAWalkthrough-10';
import SSAWalkthrough11 from './walkthrough/SSAWalkthrough-11';
import SSAWalkthrough12 from './walkthrough/SSAWalkthrough-12';
import SSAWalkthrough13 from './walkthrough/SSAWalkthrough-13';
import SSAWalkthrough14 from './walkthrough/SSAWalkthrough-14';
import SSAWalkthrough15 from './walkthrough/SSAWalkthrough-15';
import SSAWalkthrough16 from './walkthrough/SSAWalkthrough-16';
import SSAWalkthrough17 from './walkthrough/SSAWalkthrough-17';
import SSAWalkthrough18 from './walkthrough/SSAWalkthrough-18';
import SSAWalkthrough19 from './walkthrough/SSAWalkthrough-19';
import SSAWalkthrough20 from './walkthrough/SSAWalkthrough-20';
import SSAWalkthrough21 from './walkthrough/SSAWalkthrough-21';
import SSAWalkthrough22 from './walkthrough/SSAWalkthrough-22';
import SSAWalkthrough23 from './walkthrough/SSAWalkthrough-23';
import SSAWalkthrough24 from './walkthrough/SSAWalkthrough-24';
import SSAWalkthrough25 from './walkthrough/SSAWalkthrough-25';
import SSAWalkthrough26 from './walkthrough/SSAWalkthrough-26';
import SSAWalkthrough27 from './walkthrough/SSAWalkthrough-27';
import PVZWalkthrough1 from './walkthrough/PVZWalkthrough-1'
import PVZWalkthrough2 from './walkthrough/PVZWalkthrough-2'
import SporeWalkthrough1 from './walkthrough/SporeWalkthrough-1'
import SporeWalkthrough2 from './walkthrough/SporeWalkthrough-2'
import SporeWalkthrough3 from './walkthrough/SporeWalkthrough-3'
import SporeWalkthrough4 from './walkthrough/SporeWalkthrough-4'
import SporeWalkthrough5 from './walkthrough/SporeWalkthrough-5'
import SporeWalkthrough6 from './walkthrough/SporeWalkthrough-6'
import UTWalkthrough from './screens/UTWalkthrough';
import MCWalkthrough from './screens/MCWalkthrough';
import SSAWalkthrough from './screens/SSAWalkthrough';
import SSBUWalkthrough from './screens/SSBUWalkthrough';
import SporeWalkthrough from './screens/SporeWalkthrough'
import PvZWalkthrough from './screens/PvZWalkthrough'
import PHGSSWalkthrough from './screens/PHGSSWalkthrough'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    AlphabetFilterH: HomeAlphabet,
    ReleaseFilterH: HomeRelease,
    Walkthroughs: WalkthroughSearch,
    AlphabetFilterW: WalkthroughAlphabet,
    ReleaseFilterW: WalkthroughRelease,
    Update: Updates,
    SMO: SuperMarioOdyssey,
    MC: Minecraft,
    UT: Undertale,
    SSA: SkySpyroAdventure,
    SSBU: SmashBrosUltimate,
    Spore:Spore,
    PvZ:PlantsVsZombies,
    PHGSS:PokemonHeartGoldSoulSilver,
    SMOWalkthrough: SMOWalkthrough,
    CapKingdomMoons: SMOWalkthrough1,
    CascadeKingdomMoons: SMOWalkthrough2,
    SandKingdomMoons: SMOWalkthrough3,
    LakeKingdomMoons: SMOWalkthrough4,
    WoodedKingdomMoons: SMOWalkthrough5,
    CloudKingdomMoons: SMOWalkthrough6,
    LostKingdomMoons: SMOWalkthrough7,
    MetroKingdomMoons: SMOWalkthrough8,
    SnowKingdomMoons: SMOWalkthrough9,
    SeasideKingdomMoons: SMOWalkthrough10,
    LuncheonKingdomMoons: SMOWalkthrough11,
    RuinedKingdomMoons: SMOWalkthrough12,
    BowsersKingdomMoons: SMOWalkthrough13,
    MoonKingdomMoons: SMOWalkthrough14,
    MushroomKingdomMoons: SMOWalkthrough15,
    DarkSideMoons: SMOWalkthrough16,
    DarkerSideMoons: SMOWalkthrough17,
    UTWalkthrough: UTWalkthrough,
    MCWalkthrough: MCWalkthrough,
    SSAWalkthrough: SSAWalkthrough,
    ShatteredIsland:SSAWalkthrough1,
    PerilousPastures:SSAWalkthrough2,
    SkySchoonerDocks:SSAWalkthrough3,
    StormyStronghold:SSAWalkthrough4,
    OilspillIsland:SSAWalkthrough5,
    DarkWaterCove:SSAWalkthrough6,
    LeviathanLagoon:SSAWalkthrough7,
    CrystalEyeCastle:SSAWalkthrough8,
    Stonetown:SSAWalkthrough9,
    TreetopTerrace:SSAWalkthrough10,
    FallingForest:SSAWalkthrough11,
    TrollWarehouse:SSAWalkthrough12,
    GooFactory:SSAWalkthrough13,
    Battlefield:SSAWalkthrough14,
    CrawlingCatacombs:SSAWalkthrough15,
    CadaverousCrypt:SSAWalkthrough16,
    CreepyCitadel:SSAWalkthrough17,
    MolekinMine:SSAWalkthrough18,
    LavaLakesRailway:SSAWalkthrough19,
    QuicksilverVault:SSAWalkthrough20,
    ArkeyanArmory:SSAWalkthrough21,
    LairOfKaos:SSAWalkthrough22,
    EmpireOfIce:SSAWalkthrough23,
    PirateSeas:SSAWalkthrough24,
    DarklightCrypt:SSAWalkthrough25,
    DragonsPeak:SSAWalkthrough26,
    SSATheRuins:SSAWalkthrough27,
    SSBUWalkthrough: SSBUWalkthrough,
    SporeWalkthrough:SporeWalkthrough,
    CellStage:SporeWalkthrough1,
    CreatureStage:SporeWalkthrough2,
    TribalStage:SporeWalkthrough3,
    CivilizationStage:SporeWalkthrough4,
    SpaceStage:SporeWalkthrough5,
    GalacticAdventures:SporeWalkthrough6,
    PVZWalkthrough:PvZWalkthrough,
    PVZAllPlants:PVZWalkthrough1,
    PVZAllZombies:PVZWalkthrough2,
    PHGSSWalkthrough:PHGSSWalkthrough,
  },
  { initialRouteName: 'Update' }
);

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
