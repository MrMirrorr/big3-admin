import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { Breadcrumbs } from '../../components';
import { TeamForm } from './components/team-form/TeamForm';

interface Props {
	pageVariant: 'add' | 'edit';
}

const crumbs = [
	{ text: 'Teams', url: '/teams' },
	{ text: 'Add new team', url: '/teams/add' },
];

export const ManageTeam = ({ pageVariant }: Props) => {
	return (
		<AppLayout>
			<ContentLayout>
				<Breadcrumbs crumbs={crumbs} />
				<TeamForm />
			</ContentLayout>
		</AppLayout>
	);
};
