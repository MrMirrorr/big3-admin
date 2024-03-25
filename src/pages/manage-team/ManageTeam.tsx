import { AppLayout, ContentLayout } from '../../layouts';
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
			<ContentLayout isNoPaddingX>
				<Breadcrumbs crumbs={crumbs} />
				<TeamForm />
			</ContentLayout>
		</AppLayout>
	);
};
