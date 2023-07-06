import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeComponents/HomeHeader';
import Colors from '../../common/Colors';
import SearchComponent from '../../components/HomeComponents/SearchComponent';
import HomeChooseCategory from '../../components/HomeComponents/HomeChooseCategory';
import MainCourseComponent from '../../components/HomeComponents/MainCourseComponent';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.main}>
        <HomeHeader />
        <SearchComponent />
        <Text style={styles.categoryText}>Choose Category</Text>
        <HomeChooseCategory />
        <MainCourseComponent />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightYellowColor,
  },
  main: {
    marginHorizontal: 20,
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.blackColor,
    marginTop: 40,
  },
});
