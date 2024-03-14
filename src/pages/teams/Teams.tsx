import { useGetAllTeamsQuery } from '../../api/requests/team';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { TopPanel } from '../../components';

export const Teams = () => {
	const { data } = useGetAllTeamsQuery(``);

	console.log(data);

	return (
		<AppLayout>
			<ContentLayout
				topPanel={<TopPanel pageVariant="team" />}
				pagination="pagination"
			>
				Team Content
			</ContentLayout>
		</AppLayout>
	);
};
