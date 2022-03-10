import React from 'react';
import { FlatList } from 'react-native';
import FEATURE_LIST from '@/constants/features.json';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Feature } from './components/feature';

export const Home = () => {
  return (
    <FlatList
      data={FEATURE_LIST}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Feature {...item} />}
      ListHeaderComponent={() => <Header />}
      ListFooterComponent={() => <Footer />}
    />
  );
};
