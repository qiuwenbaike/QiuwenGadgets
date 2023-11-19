import type {DingExposedInterface} from './types';

const ding: DingExposedInterface = (text, type, ttl, persist) => {
	mw.loader.using('ext.gadget.Toastify').then((): void => {
		let node: HTMLElement | undefined;
		try {
			node = $(text).get(0) as HTMLElement;
		} catch {}

		const toastifyInstance: ToastifyInstance = toastify(
			{
				node,
				text,
				close: ttl === 'long',
				duration: ttl === 'long' ? -1 : ttl,
				onClick: (): void => {
					if (persist) {
						return;
					}
					toastifyInstance.hideToast();
				},
			},
			type === 'default' ? undefined : type
		);
	});
};

export {ding};
