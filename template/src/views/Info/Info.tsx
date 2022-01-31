import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { Feature } from 'components';
import { Colors } from 'themes';
import { featuresList } from 'constants/FeatureList';
import { styles } from './styles';
import { InfoFooter } from './components/InfoFooter';
import { InfoHeader } from './components/InfoHeader';

export const Info = () => {
  return (
    <View
      style={[styles.container, { backgroundColor: Colors.darkBackground }]}>
      <StatusBar backgroundColor={Colors.transparent} barStyle="dark-content" />
      <FlatList
        data={featuresList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Feature {...item} />}
        ListHeaderComponent={() => <InfoHeader />}
        ListFooterComponent={() => <InfoFooter />}
      />
    </View>
  );
};
