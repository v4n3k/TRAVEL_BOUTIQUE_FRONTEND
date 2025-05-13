import { AdminPanelTitle, SearchableExcursions } from '../../components/admin';
import { Page } from '../../components/ui';
import styles from './AdminCategoryPage.module.css';

const AdminCategoryPage = () => {
	return (
		<Page>
			<AdminPanelTitle />
			<SearchableExcursions className={styles.searchableExcursions} />
		</Page>
	);
};

export default AdminCategoryPage;
