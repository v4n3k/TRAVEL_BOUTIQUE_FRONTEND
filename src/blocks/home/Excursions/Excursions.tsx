import { useQuery } from '@tanstack/react-query';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionsList } from '../../../components/excursion/ExcursionsList/ExcursionsList';
import { Section } from '../../../components/ui/Section/Section';

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
