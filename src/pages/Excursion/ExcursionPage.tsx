import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { Modal } from '../../components/admin';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import {
	ExcursionEventsList,
	Field,
	ManagerButton,
} from '../../components/excursion';
import { Price } from '../../components/excursion/Price/Price';
import {
	Button,
	Form,
	Image,
	Page,
	Section,
	TextInput,
} from '../../components/ui';
import { useModal } from '../../hooks/useModal';
import { ExcursionEventEntity, RouteName } from '../../types';
import { formatNumber } from '../../utils/format';
import styles from './ExcursionPage.module.css';

export const ExcursionPage = () => {
	const { id } = useParams();

	const { data: excursion, isError, error } = useQuery({
		queryKey: ['excursion', id],
		queryFn: () => excursionApi.getById(Number(id)),
		retry: false, // set true after deleting mock data
	});

	const { isModalOpen, openModal, closeModal } = useModal();

	const {
		imgSrc,
		name,
		personsAmount,
		accompanistsAmount,
		price,
		info,
		excursionEvents,
	} = excursion || {};

	const formattedPrice = formatNumber(price as number);

	if (!excursion) {
		return (
			<>
				<p>Error:</p>
				<p>no data</p>
			</>
		);
	}

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
					{ id: 1, label: 'Категории', path: RouteName.EXCURSIONS },
					{ id: 2, label: 'Тюмень', path: RouteName.HOME },
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
							onClick={openModal}
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

				<ManagerButton
					className={styles.managerButtonOnSmallScreen}
					rootClassName={styles.managerButtonRoot}
				/>

				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<div className={styles.modalContainer}>
						<h3 className={styles.modalTitle}>Введите ключ</h3>
						<Form className={styles.modalForm}>
							<div className={styles.formContainer}>
								<TextInput
									className={styles.modalInput}
									placeholder='Поле для ввода ключа'
								/>
								<Price className={styles.modalPrice} price={formattedPrice} />
							</div>
							<Button
								rootClassName={styles.modalButtonRoot}
								backgroundColor='blue-500'
							>
								Оплатить
							</Button>
						</Form>
					</div>
				</Modal>
			</Section>
		</Page>
	);
};
