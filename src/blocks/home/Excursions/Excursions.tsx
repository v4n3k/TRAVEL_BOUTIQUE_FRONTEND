import { useQuery } from '@tanstack/react-query';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionsList } from '../../../components/excursion';
import { Section } from '../../../components/ui';

export const Excursions = () => {
	const { data: excursions } = useQuery({
		queryKey: ['excursions'],
		queryFn: () => excursionApi.getAllWithCities(),
	});

	if (!excursions) return;

	return (
		<Section>
			<ExcursionsList excursions={excursions} />
		</Section>
	);
};
