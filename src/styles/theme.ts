const colors = {
  gray: {
    100: "#FFFFFF",
    200: "#F9FAFB",
    300: "#E5E7EB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#111827",
  },
  green: {
    soft: "#D1FAE5",
    light: "#34D399",
    base: "#10B981",
    dark: "#059669",
  },
  red: {
    light: "#FEE2E2",
    base: "#DC2626",
  },
};

const fontFamily = {
  bold: "Rubik_700Bold",
  medium: "Rubik_500Medium",
  regular: "Rubik_400Regular",
  semiBold: "Rubik_600SemiBold",
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const radius = {
  sm: 6,
  md: 12,
  lg: 20,
  full: 999,
};

const buttonVariants = {
  primary: {
    backgroundColor: colors.green.base,
    textColor: colors.gray[100],
  },
  danger: {
    backgroundColor: colors.red.base,
    textColor: colors.gray[100],
  },
  secondary: {
    backgroundColor: colors.gray[200],
    textColor: colors.gray[600],
  },
};

export { colors, fontFamily, spacing, radius, buttonVariants };
