import amplitude from 'amplitude-js';

export default {
	install: (Vue, { apiKey, userId }) => {
		amplitude.getInstance().init(apiKey, userId, {
			includeUtm: true,
			includeReferrer: true,
			deviceIdFromUrlParam: true
		});
		Vue.config.globalProperties.$amplitude = amplitude;
	}
};
