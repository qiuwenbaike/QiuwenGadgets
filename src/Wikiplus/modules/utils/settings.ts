/* eslint-disable class-methods-use-this */
class Settings {
	getSetting(key: string, object: Record<string, string> = {}) {
		const w = object;
		let settings;
		try {
			settings = JSON.parse(localStorage['Wikiplus_Settings']);
		} catch {
			return;
		}
		try {
			const customSettingFunction = new Function(`return ${settings[key]}`);
			if (typeof customSettingFunction === 'function') {
				try {
					if (customSettingFunction()(w) === true) {
					} else {
						return customSettingFunction()(w) || settings[key];
					}
				} catch {
					return settings[key];
				}
			} else {
				return settings[key];
			}
		} catch {
			try {
				let result = settings[key];
				for (const key of Object.keys(object)) {
					result = result.replace(`\${${key}}`, object[key] as string);
				}
				return result;
			} catch {}
		}
	}
}

export default new Settings();
