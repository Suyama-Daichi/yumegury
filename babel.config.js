module.exports = (api) => {
	api.cache(true);
	return {
		presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
		plugins: [
			[
				"@tamagui/babel-plugin",
				{
					components: ["tamagui"],
					config: "./tamagui.config.ts",
					logTimings: true,
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
