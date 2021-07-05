import React from 'react';
import {StyleSheet} from 'react-native';
import ClearDay from './icons/ClearDay';
import ClearNight from './icons/ClearNight';
import CloudDay from './icons/CloudDay';
import CloudNight from './icons/CloudNight';
import Thunderboldt from './icons/Thunderboldt';
import MistNight from './icons/MistNight';
import MistDay from './icons/MistDay';
import SnowDay from './icons/SnowDay';
import SnowNight from './icons/SnowNight';
import RainNight from './icons/RainNight';
import RainDay from './icons/RainDay';
import ShowerRainDay from './icons/ShowerRainDay';
import ShowerRainNight from './icons/ShowerRainNight';
import Thermometer from './icons/Thermometer';

export type IconType =
  | '01d'
  | '02d'
  | '03d'
  | '04d'
  | '09d'
  | '10d'
  | '11d'
  | '13d'
  | '50d'
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n';

interface IWeatherIconProps {
  type: IconType;
}

const WeatherIcon = ({type}: IWeatherIconProps) => {
  switch (type) {
    case '01d':
      return <ClearDay fill={'black'} style={styles.miniWeatherImage} />;
    case '01n':
      return <ClearNight fill={'black'} style={styles.miniWeatherImage} />;
    case '02d':
    case '03d':
    case '04d':
      return <CloudDay fill={'black'} style={styles.miniWeatherImage} />;
    case '02n':
    case '03n':
    case '04n':
      return <CloudNight fill={'black'} style={styles.miniWeatherImage} />;

    case '09d':
      return <ShowerRainDay fill={'black'} style={styles.miniWeatherImage} />;
    case '09n':
      return <ShowerRainNight fill={'black'} style={styles.miniWeatherImage} />;

    case '10d':
      return <RainDay fill={'black'} style={styles.miniWeatherImage} />;
    case '10n':
      return <RainNight fill={'black'} style={styles.miniWeatherImage} />;

    case '11d':
    case '11n':
      return <Thunderboldt fill={'black'} style={styles.miniWeatherImage} />;

    case '13d':
      return <SnowDay fill={'black'} style={styles.miniWeatherImage} />;
    case '13n':
      return <SnowNight fill={'black'} style={styles.miniWeatherImage} />;
    case '50d':
      return <MistDay fill={'black'} style={styles.miniWeatherImage} />;
    case '50n':
      return <MistNight fill={'black'} style={styles.miniWeatherImage} />;

    default:
      return <Thermometer fill={'black'} style={styles.miniWeatherImage} />;
  }
};

const styles = StyleSheet.create({
  miniWeatherImage: {
    resizeMode: 'contain',
    marginVertical: 15,
    width: 50,
    height: 50,
  },
});
export default WeatherIcon;
