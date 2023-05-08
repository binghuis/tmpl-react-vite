import { Path } from '@/router';
import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { BreadcrumbComponentType } from 'use-react-router-breadcrumbs/dist/index';

interface BreadcrumbsPlusProps {
	routes: { path: Path; breadcrumb: string | BreadcrumbComponentType }[];
}

const BreadcrumbsPlus = (props: BreadcrumbsPlusProps) => {
	const { routes } = props;
	const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

	const renderBreadcrumbs = () => {
		if (!breadcrumbs || breadcrumbs.length < 2) {
			return null;
		}
		return breadcrumbs.map(({ match, breadcrumb }, i) => (
			<span key={match.pathname}>
				{i === breadcrumbs.length - 1 && <span>{breadcrumb}</span>}

				{i !== breadcrumbs.length - 1 && (
					<span>
						<Link to={match.pathname}>{breadcrumb}</Link>/
					</span>
				)}
			</span>
		));
	};

	return <>{renderBreadcrumbs()}</>;
};

export default BreadcrumbsPlus;
