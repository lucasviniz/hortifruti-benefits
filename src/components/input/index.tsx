import { Feather } from "@expo/vector-icons";
import { Animated, Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type InputProps = TextInputProps & {
    label?: string;
    icon?: keyof typeof Feather.glyphMap;
};

export function Input({ label, icon, value, onFocus, onBlur, ...rest }: InputProps){

    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || !!value;

    return (
        <View style={styles.inputWrapper}>
            {icon && <Feather name={icon} size={20} color="#4B5563" style={styles.icon} />}
            <TextInput
                style={styles.input}
                placeholderTextColor="#9CA3AF"
                {...rest}
            />
        </View>
    )
}