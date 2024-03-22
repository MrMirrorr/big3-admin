import { useAppSelector } from '../../store/store';
import { selectSidebar } from '../../modules/ui/uiSlice';
import { Header, MobileSidebar } from '../../components';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { MainContainer } from '../main-container/MainContainer';
import cn from 'classnames';
import styles from './AppLayout.module.scss';

interface Props {
	children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
	const { isOpen } = useAppSelector(selectSidebar);

	const appLayoutClasses = cn(styles.appLayout, {
		[styles.noScroll]: isOpen,
	});

	return (
		<MainContainer>
			<div className={appLayoutClasses}>
				<Header />
				<div className={styles.flex}>
					<Sidebar />
					<MobileSidebar isOpen={isOpen} />
					{children}
				</div>
			</div>
		</MainContainer>
	);
};
