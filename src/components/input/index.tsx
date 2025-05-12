import { Text, TextInput, TextInputProps, View } from "react-native";
import { useState } from "react";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { styles } from "./styles";

type InputProps = TextInputProps & {
  label?: string;
  icon?: React.ComponentType<TablerIconProps>;
  errorMessage?: string;
};

export function Input({ label, icon: Icon, errorMessage, value, onFocus, onBlur, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || !!value;

  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, errorMessage && styles.inputWrapperError]}>
        {Icon && <Icon size={20} color={errorMessage ? "#EF4444" : "#4B5563"} style={styles.icon} />}
        <TextInput
          style={[styles.input, errorMessage && styles.inputError]}
          placeholderTextColor="#9CA3AF"
          value={value}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}
