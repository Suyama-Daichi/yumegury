import { styled, Text } from "tamagui";

export const ThemedText = styled(Text, {
	name: "ThemedText",
	color: "$color",

	variants: {
		type: {
			default: {
				fontSize: 16,
				lineHeight: 24,
			},
			defaultSemiBold: {
				fontSize: 16,
				lineHeight: 24,
				fontWeight: "600",
			},
			title: {
				fontSize: 32,
				fontWeight: "bold",
				lineHeight: 32,
			},
			subtitle: {
				fontSize: 20,
				fontWeight: "bold",
			},
			link: {
				lineHeight: 30,
				fontSize: 16,
				color: "#0a7ea4",
			},
		},
	} as const,

	defaultVariants: {
		type: "default",
	},
});
