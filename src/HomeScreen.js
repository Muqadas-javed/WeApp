import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedForecast, setSelectedForecast] = React.useState('hourly');
  const underlinePosition = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(underlinePosition, {
      toValue: selectedForecast === 'hourly' ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selectedForecast]);

  const weeklyWeather = [
    { day: 'MON', temperature: '22°', chance: '30%', icon: require('../assets/cloud.png') },
    { day: 'TUE', temperature: '20°', chance: '30%', icon: require('../assets/cloud.png') },
    { day: 'WED', temperature: '18°', chance: '20%', icon: require('../assets/cloud.png') },
    { day: 'THU', temperature: '24°', chance: '30%', icon: require('../assets/cloud.png') },
    { day: 'FRI', temperature: '19°', chance: '50%', icon: require('../assets/cloud.png') },
    { day: 'SAT', temperature: '21°', chance: '30%', icon: require('../assets/cloud.png') },
    { day: 'SUN', temperature: '23°', chance: '10%', icon: require('../assets/cloud.png') },
  ];

  const hourlyWeather = [
    { time: '1AM', temperature: '18°', chance: '20%', icon: require('../assets/cloud.png') },
    { time: 'Now', temperature: '19°', chance: '10%', icon: require('../assets/cloud.png') },
    { time: '2PM', temperature: '21°', chance: '15%', icon: require('../assets/cloud.png') },
    { time: '3PM', temperature: '22°', chance: '5%', icon: require('../assets/cloud.png') },
    { time: '4PM', temperature: '23°', chance: '0%', icon: require('../assets/cloud.png') },
    { time: '5PM', temperature: '24°', chance: '0%', icon: require('../assets/cloud.png') },
  ];

  const renderWeatherItem = ({ item }) => {
    let itemStyle = styles.weatherItem;
    if (selectedForecast === 'hourly' && item.time === 'Now') {
      itemStyle = [styles.weatherItem, { backgroundColor: '#452f98' }];
    } else if (selectedForecast === 'weekly' && item.day === 'TUE') {
      itemStyle = [styles.weatherItem, { backgroundColor: '#452f98' }];
    }

    return (
      <View style={itemStyle}>
        <Text style={styles.weatherDay}>{selectedForecast === 'hourly' ? item.time : item.day}</Text>
        <Image source={item.icon} style={styles.weatherIcon} />
        <Text style={styles.weatherChance}>{item.chance}</Text>
        <Text style={styles.weatherTemperature}>{item.temperature}</Text>
      </View>
    );
  };

  const underlineLeft = underlinePosition.interpolate({
    inputRange: [0, 1],
    outputRange: ['15%', '65%']
  });

  return (
    <ImageBackground 
      source={require('../assets/background.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.textHead}>Montreal</Text>
        <Text style={styles.textTem}>19°</Text>
        <Text style={styles.textCon}>Mostly Clear</Text>
        <Text style={styles.textLat}>H:24° L:18°</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/House.png')} style={styles.homeImg}/>
        </View>
      </View>
      <View style={styles.overlay}>
        <View style={styles.forecastToggle}>
          <TouchableOpacity onPress={() => setSelectedForecast('hourly')} style={styles.toggleButton}>
            <Text style={[styles.toggleText, selectedForecast === 'hourly' && styles.selectedToggleText]}>Hourly Forecast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedForecast('weekly')} style={styles.toggleButton}>
            <Text style={[styles.toggleText, selectedForecast === 'weekly' && styles.selectedToggleText]}>Weekly Forecast</Text>
          </TouchableOpacity>
          <Animated.View style={[styles.underline, { left: underlineLeft }]} />
        </View>
        <FlatList
          data={selectedForecast === 'weekly' ? weeklyWeather : hourlyWeather}
          renderItem={renderWeatherItem}
          keyExtractor={item => selectedForecast === 'weekly' ? item.day : item.time}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
        <Image source={require('../assets/Rectangle.png')} style={styles.rectangleImg}/>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image source={require('../assets/Frame.png')} style={styles.frameImg}/>
        </TouchableOpacity>
        <Image source={require('../assets/Symbol.png')} style={styles.symbolImg}/>
        <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
          <Image source={require('../assets/menu.png')} style={styles.menuImg}/>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHead: {
    paddingTop: 30,
    fontSize: 28,
    color: '#ffffff',
    fontFamily: 'Roboto-Regular'
  },
  textTem: {
    fontSize: 90,
    marginVertical: -10,
    paddingLeft: 10,
    fontWeight: "200",
    color: '#ffffff',
  },
  textCon: {
    color: 'grey',
    paddingLeft: 10,
    fontWeight: "600",
    fontSize: 18,
  },
  textLat: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: "500",
    paddingLeft: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImg: {
    width: 350,
    height: 350,
    marginBottom:20,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 270,
    paddingVertical: 10,
    backgroundColor: '#323652',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 2,
    alignItems: 'center',
  },
  forecastToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
    position: 'relative',
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    color: '#ffffff',
  },
  selectedToggleText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    width: '20%',
    height: 2,
    backgroundColor: '#ffffff',
  },
  flatListContent: {
    alignItems: 'center',
    paddingLeft: 15,
    paddingBottom: 90,
  },
  weatherItem: {
    alignItems: 'center',
    alignContent: "center",
    marginHorizontal: 7,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#44476A',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherDay: {
    color: '#ffffff',
    fontSize: 18,
    paddingTop: 5,
    marginBottom: 5,
    fontWeight: "600",
  },
  weatherIcon: {
    width: 30,
    height: 30,
  },
  weatherChance: {
    color: "#09ADD7",
    marginBottom: 5,
    fontWeight: "600",
    fontSize: 13,
  },
  weatherTemperature: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: "600",
  },
  rectangleImg: {
    position: 'absolute',
    bottom: 0,
  },
  frameImg: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -10,
    width: 240,
    height: 105,
    zIndex: 2,
  },
  symbolImg: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    zIndex: 3,
  },
  menuImg: {
    position: 'absolute',
    bottom: 20,
    left:120,
  },
});

export default HomeScreen;
