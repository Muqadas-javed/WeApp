import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Weather = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Vector.png')} style={styles.vectorImg}/>
        </TouchableOpacity>
        <Text style={styles.Headertxt}>Weather</Text>
        <Image source={require('../assets/round.png')} style={styles.roundImg}/>
      </View>
      <View style={styles.searchBar}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
        <TextInput
          placeholder="Search for a city or airport"
          placeholderTextColor="#7F7F7F"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.recContainer}>
        <Image source={require('../assets/Rectangle1.png')} style={styles.recImg}/>
        <Text style={styles.temTxt}>20°</Text>
        <Text style={styles.latitudeTxt}>H:21° L:-19°</Text>
        <Text style={styles.cityTxt}>Toronto, Canada</Text>
      </View>
      <Image source={require('../assets/rain.png')} style={styles.rainImg}/>
      <Text style={styles.rainTxt}>Rain</Text>
      <View style={styles.recContainer1}>
        <Image source={require('../assets/Rectangle1.png')} style={styles.recImg}/>
        <Text style={styles.temTxt}>18°</Text>
        <Text style={styles.latitudeTxt}>H:26° L:-23°</Text>
        <Text style={styles.cityTxt}>Montreal, Canada</Text>
      </View>
      <Image source={require('../assets/moon.png')} style={styles.rainImg1}/>
      <Text style={styles.windTxt}>Fast Wind</Text>

    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#3B265A",
    padding: 10,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  vectorImg: {
    width: 10,
    height: 20,
    marginLeft: 30,
  },
  Headertxt: {
    color: '#FFFFFF',
    fontSize: 30,
    paddingRight: 100,
  },
  roundImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  searchBar: {
    backgroundColor: "#322350",
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  recContainer: {
    alignItems: 'center',
    height: 130, // Adjust the height as needed
  },
  recImg: {
    margin: 10,
    width:310,
    height:175,
  },
  rainImg: {
    position: "absolute",
    right: 30,
    top: 155,
    width:140,
   height:140,
  },
  rainTxt:{
  position:"absolute",
  right: 50,
  top: 285,
  fontSize: 14,
  marginTop: 5,
  },
  rainImg1:{
   position:"absolute",
   right: 30,
   bottom:270,
   width:130,
   height:130,
  },
  windTxt:{
    position:"absolute",
    right: 50,
    top: 485,
    fontSize: 14,
  },
  temTxt: {
    position: "absolute",
    top: 30,
    left: 30,
    fontSize: 70,
    color: "#ffffff",
    margin: 10,
  },
  latitudeTxt: {
    position: "absolute",
    top: 120,
    left: 45,
    color: 'grey',
    fontWeight: '500',
  },
  cityTxt: {
    position: "absolute",
    top: 140,
    left: 40,
    fontSize: 18,
    fontWeight: "500",
  },
  recContainer1: {
    alignItems: 'center',
    marginTop:60,
    height: 150, // Adjust the height as needed
  }
});
