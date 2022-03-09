import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Feature } from 'components';
import featuresList from 'constants/features.json';
import { styles } from './styles';
import { InfoFooter } from './components/InfoFooter';
import { InfoHeader } from './components/InfoHeader';

export const Info = () => {
  const { dark, colors } = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
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
