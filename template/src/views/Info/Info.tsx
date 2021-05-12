// import {Feature} from 'components/Feature/Feature';
import {Feature} from 'components/Feature/Feature';
import React from 'react';
import {FlatList, Image, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from 'themes/Images';
// import Images from 'themes/Images';
import {normalize, screenHeight} from 'themes/Metrics';

const featuresList = [
  {
    icon: '',
    name: 'RN-Vector-icons',
    version: 'v5.0',
  },
  {
    icon: '',
    name: 'React Navigation',
    version: 'v5.5',
  },
  {
    icon: '',
    name: 'Typescript',
    version: 'v3.0',
  },
];

export const Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.BoilerPlate} style={styles.image} />
      <Text style={styles.text}>RN-Biolerplate</Text>
      <FlatList
        data={featuresList}
        numColumns={2}
        keyExtractor={item => item.name}
        renderItem={({item}) => <Feature {...item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(12),
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: screenHeight * 0.15,
  },
  text: {
    marginVertical: normalize(14),
    fontSize: normalize(15),
    lineHeight: normalize(16),
    textAlign: 'center',
  },
});
