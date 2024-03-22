import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { Breadcrumbs } from '../../components';
import { TeamForm } from './components/team-form/TeamForm';

interface Props {
	pageVariant: 'add' | 'edit';
}

export const ManageTeam = ({ pageVariant }: Props) => {
	let title: string = '';

	switch (pageVariant) {
		case 'add':
			title = 'Add new team';
			break;
		case 'edit':
			title = 'Edit team';
			break;
		default:
			break;
	}

	const crumbs = [
		{ text: 'Teams', url: '/teams' },
		{ text: title, url: '/teams/manage' },
	];

	return (
		<AppLayout>
			<ContentLayout>
				<Breadcrumbs crumbs={crumbs} />
				<TeamForm />
			</ContentLayout>
		</AppLayout>
	);
};
