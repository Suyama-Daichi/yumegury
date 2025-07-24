import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { TamaguiProvider } from "tamagui";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useSecureStorage } from "../hooks/useSecureStorage";
import { config } from "../tamagui.config";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [appIsReady, setAppIsReady] = useState(false);
	const { getValue } = useSecureStorage();

	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		async function prepare() {
			try {
				// Check for access token
				const accessToken = await getValue("accessToken");
				if (!accessToken) {
					// If no token, open browser
					await WebBrowser.openBrowserAsync("https://google.com");
				}

				// Artificially delay for 3 seconds to show the splash screen.
				await new Promise((resolve) => setTimeout(resolve, 3000));
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}
		if (loaded) {
			prepare();
		}
	}, [loaded, getValue]);

	useEffect(() => {
		if (appIsReady) {
			SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<TamaguiProvider config={config} defaultTheme={colorScheme ?? "light"}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
			<StatusBar style="auto" />
		</TamaguiProvider>
	);
}
