import React from 'react';
import { FlatList, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feature } from 'components';
import { Images } from 'themes';
import { featuresList } from 'constants/FeatureList';
import { styles } from './styles';

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
