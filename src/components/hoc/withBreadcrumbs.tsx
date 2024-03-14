import { ComponentType } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../../components';

interface Crumb {
	text: string;
	url: string;
}

interface WithBreadcrumbsProps {
	crumbs: Crumb[];
}

export const withBreadcrumbs = <P extends WithBreadcrumbsProps>(
	WrappedComponent: ComponentType<P>,
) => {
	return (props: Omit<P, keyof WithBreadcrumbsProps>) => {
		const location = useLocation();
		const pathnames = location.pathname.split('/').filter((x) => x);

		const crumbs = pathnames.map((pathname, index) => {
			const url = `/${pathnames.slice(0, index + 1).join('/')}`;
			return { text: pathname, url };
		});

		return (
			<>
				<Breadcrumbs crumbs={crumbs} />
				<WrappedComponent {...(props as P)} />
			</>
		);
	};
};
