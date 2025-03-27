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
import { useNavHistory } from '../../hooks/useNavHistory';
import { ExcursionEntity } from '../../types';
import { formatNumber } from '../../utils/format';
import styles from './ExcursionPage.module.css';

export const ExcursionPage = () => {
	const { id } = useParams();

	const { data: excursion, isLoading, isError, error } = useQuery({
		queryKey: ['excursion', id],
		queryFn: () => excursionApi.getById(Number(id)),
		retry: true,
	});

	const navHistory = useNavHistory();
	const { isModalOpen, openModal, closeModal } = useModal();

	if (isLoading) return <></>;

	if (isError) {
		return (
			<>
				<p>Error:</p>
				<p>{error.message}</p>
			</>
		);
	}

	const {
		imgSrc,
		name,
		personsAmount,
		accompanistsAmount,
		price,
		info,
		excursionEvents,
	} = excursion as ExcursionEntity;

	const formattedPrice = formatNumber(price);

	const handlePay = () => {
		closeModal();
	};

	return (
		<Page className={styles.excursionPage}>
			<BreadcrumbsWithNavButton
				className={styles.breadcrumbs}
				crumbs={navHistory}
			/>
			<Section className={styles.excursion}>
				<div className={styles.imageContainer}>
					<Image src={imgSrc} />
					<Price className={styles.priceOnSmallScreen} price={price} />
					<ManagerButton className={styles.managerButton} />
				</div>
				<div className={styles.info}>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.priceContainer}>
						<Price className={styles.price} price={price} />
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
							fieldValue={accompanistsAmount}
							width='fullWidth'
							valueBackground='white-50'
						/>
						<Field
							className={styles.field}
							fieldKey='Количество в группе'
							fieldValue={personsAmount}
							width='fullWidth'
							valueBackground='white-50'
						/>
					</ul>

					<div className={styles.descriptionContainer}>
						<h3>В стоимость входит:</h3>
						<p>{info}</p>
					</div>

					<ExcursionEventsList excursionEvents={excursionEvents} />
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
								onClick={handlePay}
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
