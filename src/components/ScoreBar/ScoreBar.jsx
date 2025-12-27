import styles from './ScoreBar.module.css';

export default function ScoreBar({ rating }) {
	const percent = Math.round((rating / 10) * 100);

	const fillColor = percent > 70 ? '#4caf50' : percent > 40 ? '#ff9800' : '#f44336';

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.fill}
				style={{ width: `${percent}%`, background: fillColor }}
			/>
			<span className={styles.label}>User Score: {percent}%</span>
		</div>
	);
}
