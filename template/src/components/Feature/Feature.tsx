import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, If } from '@/components/index';
import { normalize } from '@/themes/index';
import { IState } from '@/utils/Interfaces';
import { themeAction } from '@/redux/theme/action';

interface Props {
  name: string;
  icon: string;
  version?: string;
  isThemeButton?: boolean;
}

export const Feature = (props: Props) => {
  const { name, icon, version, isThemeButton } = props;
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const theme = useSelector((state: IState) => state.theme.theme);

  const handleThemeChange = () => {
    const nextTheme =
      theme === 'System' ? 'Light' : theme === 'Light' ? 'Dark' : 'System';
    dispatch(themeAction.updateTheme(nextTheme));
  };

  if (isThemeButton) {
    return (
      <Button onPress={handleThemeChange} style={styles.container}>
        <Icon
          name={icon}
          style={styles.iconContainer}
          size={24}
          color={colors.text}
        />
        <Text style={[styles.featureName, { color: colors.text }]}>
          {`Theme ( ${theme} )`}
        </Text>
      </Button>
    );
  }

  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        style={styles.iconContainer}
        size={24}
        color={colors.text}
      />
      <Text style={[styles.featureName, { color: colors.text }]}>{name}</Text>
      <If condition={Boolean(version)}>
        <Text style={[styles.versionText, { color: colors.text }]}>
          {version}
        </Text>
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
