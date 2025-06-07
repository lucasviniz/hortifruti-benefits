import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { styles } from "./styles";

type InputProps = TextInputProps & {
  label?: string;
  icon?: React.ComponentType<TablerIconProps>;
  errorMessage?: string;
};

export function Input({
  label,
  icon: Icon,
  errorMessage,
  value,
  onFocus,
  onBlur,
  secureTextEntry,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = secureTextEntry;
  const shouldHideText = isPassword && !isPasswordVisible;

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
          secureTextEntry={shouldHideText}
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.toggleButton}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            {isPasswordVisible ? (
              <IconEyeOff size={20} color="#6B7280" />
            ) : (
              <IconEye size={20} color="#6B7280" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
}
