import IconButtton from '../buttons/IconButton';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPages }) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages || totalPages === 0;

	return (
		<div className={style.wrapper}>
			<IconButtton
				filled
				disabled={isFirstPage}
				icon={ArrowLeftIcon}
				onClick={() => setPage(page - 1)}
			/>
			<span>
				Page {page} of {totalPages || 1}
			</span>
			<IconButtton
				filled
				disabled={isLastPage}
				icon={ArrowRightIcon}
				onClick={() => setPage(page + 1)}
			/>
		</div>
	);
};

export default PageSelector;
