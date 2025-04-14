import { AdminPanelTitle, SearchableExcursions } from '../../components/admin';
import { Page } from '../../components/ui';

export const AdminCategoryPage = () => {
	return (
		<Page>
			<AdminPanelTitle />
			<SearchableExcursions />
		</Page>
	);
};
