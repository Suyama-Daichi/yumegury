import { Image } from "expo-image";
import { YStack } from "tamagui";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
			headerImage={
				<IconSymbol
					size={310}
					color="#808080"
					name="chevron.left.forwardslash.chevron.right"
					style={{
						color: "#808080",
						bottom: -90,
						left: -35,
						position: "absolute",
					}}
				/>
			}
		>
			<ThemedView style={{ flexDirection: "row", gap: 8 }}>
				<ThemedText type="title">Explore</ThemedText>
			</ThemedView>
			<ThemedText>
				This app includes example code to help you get started.
			</ThemedText>
			<Collapsible title="File-based routing">
				<ThemedText>
					This app has two screens:{" "}
					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
					and{" "}
					<ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
				</ThemedText>
				<ThemedText>
					The layout file in{" "}
					<ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
					sets up the tab navigator.
				</ThemedText>
				<ExternalLink href="https://docs.expo.dev/router/introduction">
					<ThemedText type="link">Learn more</ThemedText>
				</ExternalLink>
			</Collapsible>
			<Collapsible title="Android, iOS, and web support">
				<ThemedText>
					You can open this project on Android, iOS, and the web. To open the
					web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
					in the terminal running this project.
				</ThemedText>
			</Collapsible>
			<Collapsible title="Images">
				<YStack gap="$2">
					<ThemedText>
						For static images, you can use the{" "}
						<ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
						<ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
						provide files for different screen densities
					</ThemedText>
					<Image
						source={require("@/assets/images/react-logo.png")}
						style={{ alignSelf: "center" }}
					/>
					<ExternalLink href="https://reactnative.dev/docs/images">
						<ThemedText type="link">Learn more</ThemedText>
					</ExternalLink>
				</YStack>
			</Collapsible>
			<Collapsible title="Custom fonts">
				<ThemedText>
					Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
					to see how to load{" "}
					<ThemedText style={{ fontFamily: "SpaceMono" }}>
						custom fonts such as this one.
					</ThemedText>
				</ThemedText>
				<ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
					<ThemedText type="link">Learn more</ThemedText>
				</ExternalLink>
			</Collapsible>
			<Collapsible title="Light and dark mode components">
				<ThemedText>
					This template has light and dark mode support. The{" "}
					<ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
					lets you inspect what the user&apos;s current color scheme is, and so
					you can adjust UI colors accordingly.
				</ThemedText>
				<ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
					<ThemedText type="link">Learn more</ThemedText>
				</ExternalLink>
			</Collapsible>
			<Collapsible title="Animations">
				<YStack gap="$2">
					<ThemedText>
						This template includes an example of an animated component. The{" "}
						<ThemedText type="defaultSemiBold">
							components/HelloWave.tsx
						</ThemedText>{" "}
						component uses the powerful{" "}
						<ThemedText type="defaultSemiBold">
							react-native-reanimated
						</ThemedText>{" "}
						library to create a waving hand animation.
					</ThemedText>
					<ThemedText>
						The{" "}
						<ThemedText type="defaultSemiBold">
							components/ParallaxScrollView.tsx
						</ThemedText>{" "}
						component provides a parallax effect for the header image.
					</ThemedText>
				</YStack>
			</Collapsible>
		</ParallaxScrollView>
	);
}
