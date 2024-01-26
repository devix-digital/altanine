import './router/index.js';
import {initHover} from './modules/buttons/initHover.js';
import {initFooterAbstractMoving} from './modules/footer/abstractMoving.js';
import {initMobileNavigation} from './modules/nav/toggleNav.js';
import {parallax} from './common/parallax.js';

initHover();
initFooterAbstractMoving();
initMobileNavigation();
parallax();