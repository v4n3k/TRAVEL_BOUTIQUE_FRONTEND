import {
	FormAndCareerGuidanceExcursions,
	SchoolExcursions,
} from '../../blocks/home';
import { ExcursionsList } from '../../components/excursion';
import { Page } from '../../components/ui';

export const HomePage = () => {
	return (
		<Page>
			<SchoolExcursions />
			<ExcursionsList />
			<FormAndCareerGuidanceExcursions />
		</Page>
	);
};
