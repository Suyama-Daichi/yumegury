import * as SecureStore from "expo-secure-store";

export function useSecureStorage() {
	async function save(key: string, value: string) {
		await SecureStore.setItemAsync(key, value);
	}

	async function getValue(key: string) {
		return await SecureStore.getItemAsync(key);
	}

	return { save, getValue };
}
