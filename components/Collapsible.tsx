import { type PropsWithChildren, useState } from "react";
import { XStack, YStack } from "tamagui";

import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";

export function Collapsible({
	children,
	title,
}: PropsWithChildren & { title: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<YStack>
			<XStack
				alignItems="center"
				gap="$2"
				onPress={() => setIsOpen((value) => !value)}
				pressStyle={{
					opacity: 0.8,
				}}
			>
				<IconSymbol
					name="chevron.right"
					size={18}
					weight="medium"
					color="$color"
					style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
				/>

				<ThemedText type="defaultSemiBold">{title}</ThemedText>
			</XStack>
			{isOpen && (
				<YStack marginTop="$1.5" marginLeft="$6">
					{children}
				</YStack>
			)}
		</YStack>
	);
}
