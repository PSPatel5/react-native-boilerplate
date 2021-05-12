import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {normalize} from 'themes/Metrics';
interface Props {
  name: string;
  icon: string;
  version?: string;
}
export const Feature = (props: Props) => {
  const {name, icon, version} = props;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: normalize(12),
    paddingHorizontal: 12,
    borderLeftWidth: 2,
  },
});
