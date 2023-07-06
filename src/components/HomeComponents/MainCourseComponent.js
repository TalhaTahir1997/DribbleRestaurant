import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Colors from '../../common/Colors';
import mainCourse from '../../data/maincourse';

const MainCourseComponent = () => {
  return (
    <View style={styles.container}>
      {/* Main Course */}
      <View style={styles.mainCourse}>
        <Text style={styles.mainCourseText}>Main Course</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* FlatList */}
      <FlatList
        data={mainCourse}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View style={styles.mainContainer} key={item.id}>
              <Text style={styles.name}>{item.name}</Text>
              <Image source={item.image} style={styles.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default MainCourseComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  mainCourse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainCourseText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.blackColor,
  },
  seeAll: {
    color: Colors.redColor,
    fontWeight: '600',
    fontSize: 13,
  },

  mainContainer: {
    backgroundColor: Colors.lightestPinkColor,
    width: Dimensions.get('window').width / 2,
    marginBottom: 20,
    height: 200,
    zIndex: 1,
  },
  name: {},
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'center',
    position: 'absolute',
    bottom: -20,
    right: -20,
    zIndex: -1,
  },
});
