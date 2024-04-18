import {checkDependencies} from './modules/checkDependencies';
import {checkRedirect} from './modules/opt-bolds';

(function toolsRedirectCourtesyAndArtNames() {
	void checkDependencies();
	checkRedirect();
})();
