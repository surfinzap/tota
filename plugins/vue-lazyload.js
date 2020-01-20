import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

import error from 'assets/error.svg';
import loading from 'assets/loading.svg';

Vue.use(VueLazyload, {
	preLoad: 1, //makes the pre-loading height the same as the actual image.
	error: error,
	loading: loading,
	attempt: 1
});
