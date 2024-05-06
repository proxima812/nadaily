async function getMod() {
						return import('./daily_21-02_DNRdbwtz.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
