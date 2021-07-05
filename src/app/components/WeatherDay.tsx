import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MistNight from './icons/MistNight';
import {IRootWeather} from '../shared/interfaces/weatherInterface';

const {width} = Dimensions.get('window');

interface IWeatherDayProps {
  weather: IRootWeather;
  cityName: string;
}

const WeatherDay = ({weather, cityName}: IWeatherDayProps) => {
  return (
    <View style={styles.currentWeather}>
      <Text style={styles.country} numberOfLines={1} adjustsFontSizeToFit>
        {cityName}
      </Text>

      <View style={styles.weatherContainer}>
        <MistNight fill={'white'} style={styles.weatherImage} />
        <View>
          <Text style={styles.temperature}>{weather?.current.temp} ºC</Text>
          <Text style={styles.humidity}>
            Humedad: {weather?.current.humidity} %
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentWeather: {
    shadowColor: '#FFF',
  },
  country: {
    color: 'white',
    fontSize: 32,
    fontStyle: 'italic',
    marginLeft: 30,
    marginTop: 45,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  temperature: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
    fontStyle: 'italic',
    marginLeft: 15,
    marginTop: 45,
    marginHorizontal: 25,
  },
  humidity: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: 'italic',
    marginLeft: 8,
    marginTop: 45,
  },
  weatherImage: {
    marginVertical: 25,
    resizeMode: 'contain',
    width: width * 0.5,
    height: width * 0.5,
  },
});

export default WeatherDay;
