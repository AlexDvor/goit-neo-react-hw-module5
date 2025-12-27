import s from './ContentLayout.module.css';

const ContentLayout = ({ children }) => {
	return <div className={s.layout}>{children}</div>;
};

export default ContentLayout;
