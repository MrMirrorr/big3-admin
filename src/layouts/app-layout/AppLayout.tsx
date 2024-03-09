import { Header } from '../../components';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { MainContainer } from '../main-container/MainContainer';
import styles from './AppLayout.module.scss';

interface Props {
	children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
	return (
		<MainContainer>
			<div className={styles.appLayout}>
				<Header />
				<div className={styles.flex}>
					<Sidebar />
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</MainContainer>
	);
};
