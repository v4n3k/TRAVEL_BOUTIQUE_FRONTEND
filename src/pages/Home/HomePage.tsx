import {
	Advantages,
	ChildrenAmount,
	FormAndCareerGuidanceExcursions,
	SchoolExcursions,
} from '../../blocks/home';
import { ExcursionsList } from '../../components/excursion';
import { IconButton, Page } from '../../components/ui';
import { IconPhone } from '../../icons/IconPhone';

export const HomePage = () => {
	return (
		<Page>
			<SchoolExcursions />
			<ExcursionsList />
			<FormAndCareerGuidanceExcursions />
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					marginBottom: 64,
				}}
			>
				<IconButton Icon={<IconPhone />} />
			</div>

			<Advantages />
			<ChildrenAmount />
		</Page>
	);
};
