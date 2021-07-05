import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILocation} from '../shared/interfaces/locationInterface';

interface ILocationItemProps {
  location: ILocation;
  setCurrentLocation: (currentLocation: ILocation) => void;
}
const LocationItem = ({location, setCurrentLocation}: ILocationItemProps) => {
  return (
    <TouchableOpacity
      style={styles.touche}
      onPress={() => {
        console.log(location);
        setCurrentLocation(location);
      }}>
      <Text key={location.id}>{location.display}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touche: {
    height: 40,
    justifyContent: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 0.5,
  },
});
export default LocationItem;
