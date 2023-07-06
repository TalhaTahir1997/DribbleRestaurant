import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../common/Colors';
import category from '../../data/category';

const HomeChooseCategory = () => {
  const [selected, setSelected] = useState(0);

  const handleCategoryPress = index => {
    setSelected(index);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          const isSelected = selected === index;
          return (
            <View style={styles.flatlist}>
              <TouchableOpacity
                onPress={() => handleCategoryPress(index)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: isSelected
                    ? Colors.categoryColor
                    : Colors.silverColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                }}>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeChooseCategory;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  mainText: {
    fontWeight: 'bold',
    color: Colors.blackColor,
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 30,
    resizeMode: 'contain',
  },
  name: {
    textAlign: 'center',
    color: Colors.lightBlackColor,
    fontSize: 12,
    marginTop: 10,
    fontWeight: '400',
  },
});
