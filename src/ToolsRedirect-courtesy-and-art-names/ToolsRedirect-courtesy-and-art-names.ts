import {checkDependencies} from './modules/checkDependencies';
import {checkRedirect} from './modules/courtesy-and-art-names';

(function toolsRedirectCourtesyAndArtNames() {
	void checkDependencies();
	checkRedirect();
})();
