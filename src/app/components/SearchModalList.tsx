import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from './SearchBar';
import {globalStyles} from '../theme/styles';
import LocationItem from './LocationItem';
import {ILocation} from '../shared/interfaces/locationInterface';
import {useLocationSearch} from '../hooks/useLocationSearch';
import Close from './icons/Close';

interface ISearchModalListProps {
  show: boolean;
  onCancel: () => void;
  setCurrentLocation: (location: ILocation) => void;
}

const SearchModalList = ({
  show,
  onCancel,
  setCurrentLocation,
}: ISearchModalListProps) => {
  const {isLoading, fetchSearchLocation, weatherFiltered} = useLocationSearch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchSearchLocation({q: query});
  }, [query]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.close} onPress={onCancel}>
            <Close fill={'black'} width={20} height={20} />
          </TouchableOpacity>
        </View>
        <SearchBar
          styleContainer={styles.searchContainer}
          onSearch={q => setQuery(q)}
        />

        {isLoading && (
          <Text style={{textAlign: 'center'}}>Buscando resultados...</Text>
        )}

        {!isLoading && (
          <View style={styles.listContainer}>
            <FlatList
              data={weatherFiltered}
              renderItem={({item}) => (
                <LocationItem
                  key={item.id}
                  location={item}
                  setCurrentLocation={setCurrentLocation}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    ...globalStyles.shadow,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    marginVertical: Platform.OS === 'ios' ? 60 : 40,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  searchContainer: {
    marginTop: 25,
    marginBottom: 20,
  },
  closeContainer: {
    ...globalStyles.shadow,
    flex: 1,
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  close: {
    padding: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 25,
    marginBottom: 25,
  },
});

export default SearchModalList;
