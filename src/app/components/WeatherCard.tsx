import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherIcon, {IconType} from './WeatherIcon';
import dayjs from 'dayjs';
import es from 'dayjs/locale/es';
import {IDaily} from '../shared/interfaces/weatherInterface';

dayjs.locale(es);

interface IWeatherCardProps {
  weather: IDaily;
}

const WeatherCard = ({weather}: IWeatherCardProps) => {
  const day = dayjs.unix(weather.dt).format('dddd');
  return (
    <View style={styles.weatherDayContainer}>
      <Text style={styles.weatherDay}>{day}</Text>
      <WeatherIcon type={weather.weather[0].icon as IconType} />
      <Text>{weather.temp.day} ºC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  weatherDay: {
    textTransform: 'capitalize',
    fontSize: 18,
  },
});

export default WeatherCard;
