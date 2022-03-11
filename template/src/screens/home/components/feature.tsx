import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '@/components';
import { normalize } from '@/themes';
import { IAppDispatch, IRootState } from '@/redux/store';
import { themeActions } from '@/redux/slice';

interface Props {
  name: string;
  icon: string;
  version?: string;
  isThemeButton?: boolean;
}

export const Feature = (props: Props) => {
  const { name, version, icon, isThemeButton } = props;
  const { colors } = useTheme();
  const dispatch = useDispatch<IAppDispatch>();
  const theme = useSelector((state: IRootState) => state.theme.currentTheme);

  const handleThemeChange = () => {
    const nextTheme =
      theme === 'System' ? 'Light' : theme === 'Light' ? 'Dark' : 'System';
    dispatch(themeActions.setTheme(nextTheme));
  };

  if (isThemeButton) {
    return (
      <Button
        android_ripple={{ color: colors.primary }}
        onPress={handleThemeChange}
        style={styles.container}>
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
    marginStart: 12,
    marginEnd: 6,
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
