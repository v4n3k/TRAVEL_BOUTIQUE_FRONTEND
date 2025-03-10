import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import {
	ExcursionEventsList,
	Field,
	ManagerButton,
} from '../../components/excursion';
import { Price } from '../../components/excursion/Price/Price';
import { Button, Image, Page, Section } from '../../components/ui';
import { ExcursionEventEntity } from '../../types';
import styles from './ExcursionPage.module.css';

export const ExcursionPage = () => {
	const { id } = useParams();

	const { data: excursion, isError, error } = useQuery({
		queryKey: ['excursion', id],
		queryFn: () => excursionApi.getById(Number(id)),
		retry: false, // set true after deleting mock data
	});

	const {
		imgSrc,
		name,
		personsAmount,
		accompanistsAmount,
		price,
		info,
		excursionEvents,
	} = excursion || {};

	if (isError) {
		return (
			<>
				<p>Error:</p>
				<p>{error.message}</p>
			</>
		);
	}

	return (
		<Page className={styles.excursionPage}>
			<BreadcrumbsWithNavButton
				className={styles.breadcrumbs}
				crumbs={[
					{ id: 1, label: 'Категории' },
					{ id: 2, label: 'Тюмень' },
				]}
			/>
			<Section className={styles.excursion}>
				<div className={styles.imageContainer}>
					<Image src={imgSrc} />
					<Price
						className={styles.priceOnSmallScreen}
						price={price as number}
					/>
					<ManagerButton className={styles.managerButton} />
				</div>
				<div className={styles.info}>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.priceContainer}>
						<Price className={styles.price} price={price as number} />
						<Button
							className={styles.buyButton}
							fullWidth
							backgroundColor='blue-500'
						>
							Купить
						</Button>
					</div>

					<ul className={styles.amounts}>
						<Field
							className={styles.field}
							fieldKey='Количество сопровождающих'
							fieldValue={accompanistsAmount as number}
							width='fullWidth'
							valueBackground='white-50'
						/>
						<Field
							className={styles.field}
							fieldKey='Количество в группе'
							fieldValue={personsAmount as number}
							width='fullWidth'
							valueBackground='white-50'
						/>
					</ul>

					<div className={styles.descriptionContainer}>
						<h3>В стоимость входит:</h3>
						<p>{info}</p>
					</div>

					<ExcursionEventsList
						excursionEvents={excursionEvents as ExcursionEventEntity[]}
					/>
				</div>

				<ManagerButton className={styles.managerButtonOnSmallScreen} />
			</Section>
		</Page>
	);
};
