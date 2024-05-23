import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import React from 'react';

const Menu = () => {
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
    <View style={styles.container}>
      <View style={styles.headerTxt}>
        <Text style={styles.textHead}>Montreal</Text>
        <Text style={styles.textLat}>19° | Mostly Clear </Text>
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
      </View>
      <Image source={require('../assets/FrameAir.png')} style={styles.menuImg}/>
      <View style={styles.FrameContainer}>
      <Image source={require('../assets/Frame1.png')} style={styles.frameImg}/>
      <Image source={require('../assets/Frame2.png')} style={styles.frameImg}/>
      </View>
      <View style={styles.FrameContainer}>
      <Image source={require('../assets/Frame3).png')} style={styles.frame1Img}/>
      <Image source={require('../assets/Frame4.png')} style={styles.frame1Img}/>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3B255B',
      paddingLeft: 15,
    },
    headerTxt: {
      alignContent: 'center',
      alignItems: 'center',
    },
    textHead: {
      fontSize: 38,
      color: '#ffffff',
      fontFamily: 'Roboto-Regular',
    },
    textLat: {
      fontSize: 22,
      color: "grey",
      fontWeight: "300",
    },
    overlay: {
        width: '100%',
        height: 200, // Adjusted height
        paddingVertical: 0,  // Reduced padding
        alignItems: 'center',
      },
      forecastToggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
      },
    toggleButton: {
      flex: 1,
      alignItems: 'center',
    },
    toggleText: {
      fontSize: 16,
      color: '#ffffff',
      paddingTop:10,
    },
    selectedToggleText: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    underline: {
      position: 'absolute',
      bottom: 0,
      width: '20%',
      height: 1,
      backgroundColor: '#ffffff',
    },
    flatListContent: {
      alignItems: 'center',
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
    menuImg: {
      height: 150,
      width: "95%",
    },
    FrameContainer: {
      paddingTop: 10,
      flexDirection: "row",
    },
    frameImg: {
      margin: 10,
      height: 150,
      width: 150,
    },
    frame1Img: {
        margin: 10,
        height: 130,
        width: 150,
      }
  });
  
