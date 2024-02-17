declare global {
	interface Window {
		easy_archive: {
			never_enable_on_these_pages_regex?: RegExp[];
			section_count: number | null;
		};
	}
}

export default global;
