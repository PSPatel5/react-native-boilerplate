import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { If } from 'components/If/If';
import { normalize } from 'themes/Metrics';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  name: string;
  icon: string;
  version?: string;
}
export const Feature = (props: Props) => {
  const { name, icon, version } = props;
  return (
    <View style={styles.container}>
      <Icon name={icon} style={styles.iconContainer} size={24} />
      <Text style={styles.featureName}>{name}</Text>
      <If condition={Boolean(version)}>
        <Text style={styles.versionText}>{version}</Text>
      </If>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: normalize(6),
    marginHorizontal: normalize(4),
    borderWidth: 0.3,
    borderRadius: 4,
    borderLeftColor: 'red',
    borderLeftWidth: 3,
    paddingEnd: 6,
    alignItems: 'center',
  },
  iconContainer: {
    width: 24,
    marginHorizontal: 4,
    paddingVertical: 12,
  },
  versionText: {
    marginStart: 8,
  },
  featureName: {
    paddingVertical: normalize(8),
    textAlign: 'center',
    flex: 1,
  },
});
