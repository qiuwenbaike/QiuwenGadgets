import {checkDependencies} from './modules/checkDependencies';
import {checkRedirect} from './modules/bio-latin-names';

(function toolsRedirectBioLatinNames() {
	void checkDependencies();
	checkRedirect();
})();
