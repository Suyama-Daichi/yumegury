import { Platform, useColorScheme as useRNColorScheme } from "react-native";

// A shim for useColorScheme that supports web.
export function useColorScheme(): "light" | "dark" {
	const hydrated = Platform.OS !== "web";
	const colorScheme = useRNColorScheme();

	if (!hydrated) return "light";

	return colorScheme ?? "light";
}
