import { initNavigation } from './nav.js';
import { initForms } from './forms.js';
import { initLazyLoading } from './lazyload.js';

window.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initForms();
    initLazyLoading();
});
