import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../common/Colors';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={24} color={Colors.lightBlackColor} />
      </TouchableOpacity>
      <View style={styles.divider} />
      <TextInput
        style={styles.input}
        placeholder="What would you like to eat?"
        placeholderTextColor={Colors.darkGrayColor}
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderRightWidth: 2,
    borderRightColor: Colors.lightGrayColor,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: Colors.lightBlackColor,
    fontSize: 14,
  },
});
