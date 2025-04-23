import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { ModalButton, TitledModal } from '../../components/admin';
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
	});

	const navHistory = useNavHistory();
	const { isModalOpen, openModal, closeModal } = useModal();

	useEffect(() => {
		console.log(navHistory);
	}, [navHistory]);

	useEffect(() => {
		console.log(isError);
	}, [isError]);

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

					{!!price && (
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
					)}

					<ul className={styles.amounts}>
						{!!accompanistsAmount && (
							<Field
								className={styles.field}
								fieldKey='Количество сопровождающих'
								fieldValue={accompanistsAmount}
								width='fullWidth'
								valueBackground='white-50'
							/>
						)}

						{!!personsAmount && (
							<Field
								className={styles.field}
								fieldKey='Количество в группе'
								fieldValue={personsAmount}
								width='fullWidth'
								valueBackground='white-50'
							/>
						)}
					</ul>

					{!!info && (
						<div className={styles.descriptionContainer}>
							<h3>В стоимость входит:</h3>
							<p>{info}</p>
						</div>
					)}

					<ExcursionEventsList excursionEvents={excursionEvents} />
				</div>

				<ManagerButton
					className={styles.managerButtonOnSmallScreen}
					rootClassName={styles.managerButtonRoot}
				/>

				<TitledModal
					isOpen={isModalOpen}
					onClose={closeModal}
					title='Введите ключ'
				>
					<Form className={styles.modalForm}>
						<div className={styles.formContainer}>
							<TextInput
								className={styles.modalInput}
								placeholder='Поле для ввода ключа'
							/>
							<Price className={styles.modalPrice} price={formattedPrice} />
						</div>
						<ModalButton backgroundColor='blue-500' onClick={handlePay}>
							Оплатить
						</ModalButton>
					</Form>
				</TitledModal>
			</Section>
		</Page>
	);
};
