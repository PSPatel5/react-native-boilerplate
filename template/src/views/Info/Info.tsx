import React from 'react';
import { Feature } from 'components';
import { FlatList, Image, Platform, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from 'themes/Images';
import { normalize, screenHeight } from 'themes/Metrics';
import { featuresList } from 'constants/FeatureList';

export const Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.BoilerPlate} style={styles.image} />
      <Text style={styles.text}>RN-Biolerplate</Text>
      <FlatList
        data={featuresList}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Feature {...item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.select({ android: 40 }),
    paddingHorizontal: normalize(4),
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
