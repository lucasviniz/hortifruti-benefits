import {
    ActivityIndicator,
    Text,
    TextProps,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
  } from "react-native";
  import { s } from "./styles";
  import { colors } from "@/styles/theme";
  import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
  
  type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;
    children: React.ReactNode;
  };
  
  function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
    return (
      <TouchableOpacity
        style={[s.container, style, isLoading && { opacity: 0.7 }]}
        activeOpacity={0.8}
        disabled={isLoading || rest.disabled}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.gray[100]} style={s.loading} />
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            {children}
          </View>
        )}
      </TouchableOpacity>
    );
  }
  
  function Title({ children, ...rest }: TextProps) {
    return <Text style={s.title} {...rest}>{children}</Text>;
  }
  
  type IconProps = {
    icon: React.ComponentType<TablerIconProps>;
  };
  
  function Icon({ icon: Icon }: IconProps) {
    return <Icon size={20} color={colors.gray[100]} />;
  }
  
  Button.Title = Title;
  Button.Icon = Icon;
  
  export { Button };
  