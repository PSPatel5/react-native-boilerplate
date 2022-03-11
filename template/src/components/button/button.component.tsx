import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { styles } from './button.styles';
import { Colors } from '@/themes';

interface IButton extends PressableProps {
  onPress: () => void;
  children?: React.ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
}

export const Button = (props: IButton) => {
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
      {loading ? (
        <ActivityIndicator color={loadingColor} />
      ) : title ? (
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      ) : children ? (
        children
      ) : null}
    </Pressable>
  );
};
