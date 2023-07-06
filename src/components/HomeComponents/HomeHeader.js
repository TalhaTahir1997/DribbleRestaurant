import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../../common/Colors';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.delivery}>Delivery</Text>
        <Text style={styles.location}>Bacangan, Sambit</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/avatar.jpg')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  delivery: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.blackColor,
  },
  location: {
    fontSize: 15,
    color: Colors.lightBlackColor,
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  image: {
    width: '100%',
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
  },
});
