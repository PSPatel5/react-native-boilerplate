import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button } from '@/components/index';
import { normalize } from '@/themes/index';

interface Props {
  name: string;
  icon: string;
  version?: string;
  isThemeButton?: boolean;
}

export const Feature = (props: Props) => {
  const { name, version, isThemeButton } = props;
  const { colors } = useTheme();

  const handleThemeChange = () => {};

  if (isThemeButton) {
    return (
      <Button onPress={handleThemeChange} style={styles.container}>
        <Text style={[styles.featureName, { color: colors.text }]}>
          {'Theme ( Auto )'}
        </Text>
      </Button>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.featureName, { color: colors.text }]}>{name}</Text>
      {version && (
        <Text style={[styles.versionText, { color: colors.text }]}>
          {version}
        </Text>
      )}
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
    borderColor: 'blue',
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
