import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Search from './icons/Search';
import {globalStyles} from '../theme/styles';
import {useDebounce} from '../hooks/useDebounce';

interface ISearchProps {
  onSearch?: (query: string) => void;
  styleContainer?: StyleProp<ViewStyle>;
}

const SearchBar = ({
  onSearch = () => {},
  styleContainer = {},
}: ISearchProps) => {
  const [query, setQuery] = useState('');

  const debounceQuery = useDebounce(query);

  useEffect(() => {
    onSearch(debounceQuery);
  }, [debounceQuery]);

  return (
    <View style={[styles.searchContainer, styleContainer]}>
      <TextInput
        autoCapitalize={'none'}
        style={styles.inputSearch}
        value={query}
        onChangeText={setQuery}
        placeholder={'Ingresa tu busqueda...'}
      />
      <Search fill={'rgba(44,50,59,0.5)'} width={25} height={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    ...globalStyles.shadow,
  },

  inputSearch: {
    flex: 1,
  },
});

export default SearchBar;
