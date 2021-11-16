import React from 'react';
import { If } from 'components';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { Colors } from 'themes';
interface Props extends PressableProps {
  onPress: () => void;
  children?: React.ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
}

export const Button = (props: Props) => {
  const {
    title,
    titleStyle,
    buttonStyle,
    children,
    disabled,
    loading,
    loadingColor = Colors.white,
    onPress,
    ...restButtonProps
  } = props;
  const buttonStyleWrapper = disabled
    ? [styles.container, styles.disabledButton, buttonStyle]
    : [styles.container, buttonStyle];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyleWrapper}
      {...restButtonProps}>
      <If condition={Boolean(loading)}>
        <ActivityIndicator color={loadingColor} />
      </If>
      <If condition={Boolean(!loading && title)}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </If>
      <If condition={Boolean(!loading && children)}>{children}</If>
    </Pressable>
  );
};
