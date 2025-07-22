import { Tabs } from "expo-router";
import { Platform, type ViewStyle } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useThemeColor } from "@/hooks/useThemeColor";

const tabBarStyle: ViewStyle = {
	borderTopWidth: 0,
	...Platform.select({
		ios: {
			position: "absolute",
			backgroundColor: "transparent",
			elevation: 0,
		},
		default: {
			// This is default for Android and web.
		},
	}),
};

const renderTabBarIcon = (
	name: React.ComponentProps<typeof IconSymbol>["name"],
) => {
	return function TabBarIcon({ color }: { color: string }) {
		return <IconSymbol size={28} name={name} color={color} />;
	};
};

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: {
					...tabBarStyle,
					backgroundColor: useThemeColor({}, "background"),
				},
				tabBarActiveTintColor: useThemeColor({}, "tint"),
				tabBarInactiveTintColor: useThemeColor({}, "tabIconDefault"),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: renderTabBarIcon("house.fill"),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",
					tabBarIcon: renderTabBarIcon("paperplane.fill"),
				}}
			/>
		</Tabs>
	);
}
