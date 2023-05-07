import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

type IconButtonProps = {
  text?: string;
  icon?: string;
  onPress: () => void;
  color?: string;
};

const IconButton = (props: IconButtonProps) => {
  const {text, onPress, color} = props;
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? styles.pressed : undefined)}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, color ? {color: color} : undefined]}>
          {text ?? 'Add'}
        </Text>
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.primary,
  },
});
