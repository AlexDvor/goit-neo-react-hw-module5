import toast from 'react-hot-toast';

export const message = (text, type = 'info', options = {}) => {
	const config = {
		position: 'bottom-right',
		duration: 4000,
		...options,
	};

	switch (type) {
		case 'success':
			return toast.success(text, config);

		case 'error':
			return toast.error(text, config);

		case 'warning':
			return toast(text, {
				...config,
				icon: '⚠️',
				style: {
					background: '#FFF7ED',
					color: '#9A3412',
				},
			});

		case 'info':
		default:
			return toast(text, config);
	}
};
