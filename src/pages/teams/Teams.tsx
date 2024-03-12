import { TopPanel } from '../../components';
import { options } from '../../dto-mock/IPositionOption';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';

export const Teams = () => {
	return (
		<AppLayout>
			<ContentLayout
				topPanel={<TopPanel filterOptions={options} />}
				pagination="pagination"
			>
				Team Content
			</ContentLayout>
		</AppLayout>
	);
};
