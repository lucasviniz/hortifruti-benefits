import { Feather } from "@expo/vector-icons";
import { Animated, Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

type InputProps = TextInputProps & {
    label?: string;
    icon?: React.ComponentType<TablerIconProps>;
};

export function Input({ label, icon: Icon, value, onFocus, onBlur, ...rest }: InputProps){

    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || !!value;

    return (
        <View style={styles.inputWrapper}>
            {Icon && <Icon size={20} color="#4B5563" style={styles.icon} />}
            <TextInput
                style={styles.input}
                placeholderTextColor="#9CA3AF"
                {...rest}
            />
        </View>
    )
}