import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from './app/components/Background';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {globalStyles} from './app/theme/styles';
import useWeather from './app/hooks/useWeather';
import WeatherCard from './app/components/WeatherCard';
import WeatherDay from './app/components/WeatherDay';
import Search from './app/components/icons/Search';
import SearchModalList from './app/components/SearchModalList';
import {ILocation, ResultType} from './app/shared/interfaces/locationInterface';

const App = () => {
  //TODO: Recuperar la ubicacion actual del usuario.
  const [currentLocation, setCurrentLocation] = useState<ILocation>({
    id: 19,
    slug: 'monterrey',
    city_slug: 'monterrey',
    display: 'Monterrey',
    ascii_display: 'monterrey',
    city_name: 'Monterrey',
    city_ascii_name: 'monterrey',
    state: 'Nuevo León',
    country: 'México',
    lat: '25.6866142',
    long: '-100.3161126',
    result_type: ResultType.City,
    popularity: '0.365111433802639',
    sort_criteria: 0.7460445735210556,
  });

  const {weather, isLoading, fetchWeather} = useWeather();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(false);
    fetchWeather(currentLocation);
  }, [currentLocation]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#2C323B" />
      </View>
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Background />
        <WeatherDay weather={weather!} cityName={currentLocation.city_name} />
        <TouchableOpacity
          style={styles.search}
          onPress={() => setShowModal(!showModal)}>
          <Search fill={'white'} width={25} height={25} />
        </TouchableOpacity>
        {weather?.daily && (
          <>
            <View style={styles.forecast}>
              <View style={styles.miniImagesContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {weather.daily.map(d => (
                    <WeatherCard key={d.dt} weather={d} />
                  ))}
                </ScrollView>
              </View>
            </View>
          </>
        )}
      </View>
      <SearchModalList
        setCurrentLocation={setCurrentLocation}
        show={showModal}
        onCancel={() => setShowModal(!showModal)}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    ...globalStyles.shadow,
    shadowColor: '#FFF',
    position: 'absolute',
    top: 55,
    right: 25,
  },
  forecast: {
    marginHorizontal: '5%',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 100 : 50,
  },
  nextDays: {
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  miniImagesContainer: {
    paddingVertical: 20,
    ...globalStyles.shadow,
  },
  miniWeatherImage: {
    resizeMode: 'contain',
    marginVertical: 15,
    width: 50,
    height: 50,
  },
});

export default App;
