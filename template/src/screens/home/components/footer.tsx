import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Button } from '@/components';
import { normalize, Colors } from '@/themes';

export const Footer = () => {
  const openLinkInBrowser = async (selected: 'repo' | 'issue') => {
    const gitURL = 'https://github.com/PSPatel5/react-native-boilerplate';
    const selectedLink = selected === 'repo' ? gitURL : `${gitURL}/issues`;
    const isOpenable = await Linking.canOpenURL(selectedLink);
    if (isOpenable) {
      await Linking.openURL(selectedLink);
    }
  };
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={'Visit Repository'}
        titleStyle={styles.titleStyle}
        buttonStyle={styles.button}
        android_ripple={{ color: Colors.transparentDark }}
        onPress={() => openLinkInBrowser('repo')}
      />
      <Button
        title={'Raise an issue'}
        titleStyle={styles.titleStyle}
        buttonStyle={styles.button}
        android_ripple={{ color: Colors.transparentDark }}
        onPress={() => openLinkInBrowser('issue')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: normalize(18),
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    elevation: 4,
  },
  titleStyle: {
    color: Colors.white,
  },
});
