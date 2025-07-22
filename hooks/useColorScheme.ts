import { useEffect, useState } from "react";
import { Platform, useColorScheme as useRNColorScheme } from "react-native";

// A shim for useColorScheme that supports web.
export function useColorScheme() {
	const [hydrated, setHydrated] = useState(Platform.OS !== "web");
	const colorScheme = useRNColorScheme();

	useEffect(() => {
		if (Platform.OS === "web") {
			setHydrated(true);
		}
	}, []);

	if (!hydrated) {
		// This prevents a flash of the wrong color scheme on web.
		return "light";
	}

	return colorScheme;
}
