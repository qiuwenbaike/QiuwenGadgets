/**!
 * @source {@link https://daringfireball.net/2010/07/improved_regex_for_matching_urls}
 * @author John Gruber
 */
const REGEX_URL =
	/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;

export {REGEX_URL};
