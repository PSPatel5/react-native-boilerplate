import React from 'react';
import { FlatList, Image, Linking, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Feature } from 'components';
import { Images } from 'themes';
import { featuresList } from 'constants/FeatureList';
import { styles } from './styles';

export const Info = () => {
  const openLinkInBrowser = async (selected: 'repo' | 'issue') => {
    const githubLink =
      'https://github.com/Parth-coditas/react-native-boilerplate';
    const issueLink =
      'https://github.com/Parth-coditas/react-native-boilerplate/issues';
    const selectedLink = selected === 'repo' ? githubLink : issueLink;
    const isOpenable = await Linking.canOpenURL(selectedLink);
    if (isOpenable) {
      await Linking.openURL(selectedLink);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.BoilerPlate} style={styles.image} />
      <Text style={styles.text}>RN-Biolerplate</Text>
      <Text style={styles.smallText}>
        This boilerplate can be used to kick start mobile application with a
        clean architecture. Here are few of the key functionalities are listed
        below
      </Text>
      <View>
        <FlatList
          data={featuresList}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Feature {...item} />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Visit Repository'}
          titleStyle={styles.titleStyle}
          onPress={() => openLinkInBrowser('repo')}
        />
        <Button
          title={'Raise an issue'}
          titleStyle={styles.titleStyle}
          onPress={() => openLinkInBrowser('issue')}
        />
      </View>
    </SafeAreaView>
  );
};
