import { Image } from "expo-image";
import { YStack } from "tamagui";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={{
						height: 178,
						width: 290,
						bottom: 0,
						left: 0,
						position: "absolute",
					}}
				/>
			}
		>
			<ThemedView
				style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
			>
				<ThemedText type="title">Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<YStack gap="$2" marginBottom="$2">
				<ThemedText type="subtitle">Step 1: Try it</ThemedText>
				<ThemedText>
					Edit{" "}
					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
					to see changes. Press{" "}
					<ThemedText type="defaultSemiBold">F12</ThemedText> to open developer
					tools.
				</ThemedText>
			</YStack>
			<YStack gap="$2" marginBottom="$2">
				<ThemedText type="subtitle">Step 2: Explore</ThemedText>
				<ThemedText>
					{`Tap the Explore tab to learn more about what's included in this starter app.`}
				</ThemedText>
			</YStack>
			<YStack gap="$2" marginBottom="$2">
				<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
				<ThemedText>
					{`When you're ready, run `}
					<ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
					to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
					directory. This will move the current{" "}
					<ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
					<ThemedText type="defaultSemiBold">app-example</ThemedText>.
				</ThemedText>
			</YStack>
		</ParallaxScrollView>
	);
}
