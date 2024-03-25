import { AppLayout, ContentLayout } from '../../layouts';
import { Breadcrumbs } from '../../components';
import { PlayerForm } from './components/player-form/PlayerForm';

interface Props {
	pageVariant: 'add' | 'edit';
}

export const ManagePlayer = ({ pageVariant }: Props) => {
	let title: string = '';

	switch (pageVariant) {
		case 'add':
			title = 'Add new player';
			break;
		case 'edit':
			title = 'Edit player';
			break;
		default:
			break;
	}

	const crumbs = [
		{ text: 'Players', url: '/players' },
		{ text: title, url: '/players/manage' },
	];

	return (
		<AppLayout>
			<ContentLayout isNoPaddingX>
				<Breadcrumbs crumbs={crumbs} />
				<PlayerForm />
			</ContentLayout>
		</AppLayout>
	);
};
