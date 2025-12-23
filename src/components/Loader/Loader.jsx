import { BeatLoader } from 'react-spinners';

const override = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};

const Loader = ({ isLoading }) => {
	return (
		<>
			<BeatLoader
				size={40}
				aria-label='Loading Spinner'
				data-testid='loader'
				loading={isLoading}
				color=' rgb(16, 160, 160)'
				cssOverride={override}
			/>
		</>
	);
};

export default Loader;
