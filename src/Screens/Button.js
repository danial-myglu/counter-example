import React from 'react';
import {Pressable, Text} from 'react-native';

const Button = props => {
  const {onPress, type, btnStyle, disabled} = props;

  return (
    <Pressable style={btnStyle} disabled={disabled} onPress={onPress}>
      <Text>{type === 'ADD' ? 'plus' : 'minus'}</Text>
      {/* <Icon name={type === 'ADD' ? 'plus' : 'minus'} size={35} color="white" /> */}
    </Pressable>
  );
};

export default Button;
