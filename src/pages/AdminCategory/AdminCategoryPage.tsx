import { SearchableExcursions } from '../../components/admin/SearchableExcursions/SearchableExcursions';
import { AdminPanelTitle } from '../../components/admin/ui/AdminPanelTitle/AdminPanelTitle';
import { Page } from '../../components/ui/Page/Page';
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
