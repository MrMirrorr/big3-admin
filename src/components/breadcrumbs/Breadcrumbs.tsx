import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Breadcrumbs.module.scss';

interface Crumb {
	text: string;
	url: string;
}

interface Props {
	crumbs: Crumb[];
}

export const Breadcrumbs = ({ crumbs }: Props) => {
	const isLastElem = (index: number) => index < crumbs.length - 1;

	return (
		<div className={styled.breadcrumbs}>
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
