import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import { styles } from './styles';

type SocialButtonProps = TouchableOpacityProps & {
  iconSource: any; // pode ser require(...) ou { uri: ... }
};

const SocialButton: React.FC<SocialButtonProps> = ({ iconSource, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} {...rest}>
      <Image source={iconSource} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default SocialButton;
