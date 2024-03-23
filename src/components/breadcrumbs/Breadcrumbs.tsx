import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export interface ICrumb {
	text: string;
	url: string;
}

interface Props {
	crumbs: ICrumb[];
}

export const Breadcrumbs = ({ crumbs }: Props) => {
	const isLastElem = (index: number) => index < crumbs.length - 1;

	return (
		<div className={styles.breadcrumbs}>
			{crumbs.map((crumb, index) => (
				<React.Fragment key={index}>
					{isLastElem(index) ? (
						<Link to={crumb.url}>{crumb.text}</Link>
					) : (
						crumb.text
					)}
					{isLastElem(index) && <span> / </span>}
				</React.Fragment>
			))}
		</div>
	);
};
