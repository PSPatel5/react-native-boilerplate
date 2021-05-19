import React from 'react';
import { If } from 'components/If/If';
import { ActivityIndicator, Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
interface Props {
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
  const { title, titleStyle, onPress, buttonStyle, children, disabled, loading, loadingColor } = props;
  return (
    <Pressable onPress={onPress} disabled={disabled || loading} style={buttonStyle}>
      <If condition={Boolean(loading)}>
        <ActivityIndicator color={loadingColor} />
      </If>
      <If condition={Boolean(title)}>
        <Text style={titleStyle}>{title}</Text>
      </If>
      <If condition={Boolean(children)}>{children}</If>
    </Pressable>
  );
};
