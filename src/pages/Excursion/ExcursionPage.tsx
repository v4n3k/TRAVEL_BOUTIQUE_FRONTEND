import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import { ModalButton } from '../../components/admin/ui/ModalButton/ModalButton';
import { TitledModal } from '../../components/admin/ui/TitledModal/TitledModal';
import { ExcursionEventsList } from '../../components/excursion/ExcursionEventsList/ExcursionEventsList';
import { Price } from '../../components/excursion/Price/Price';
import { Field } from '../../components/excursion/ui/Field/Field';
import { ManagerButton } from '../../components/excursion/ui/ManagerButton/ManagerButton';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Image } from '../../components/ui/Image/Image';
import { Page } from '../../components/ui/Page/Page';
import { Section } from '../../components/ui/Section/Section';
import { TextInput } from '../../components/ui/TextInput/TextInput';
import { useCreatePayment } from '../../hooks/api/useCreatePayment';
import { useModal } from '../../hooks/useModal';
import { formatNumber } from '../../utils/format';
import styles from './ExcursionPage.module.css';

const ExcursionPage = () => {
	const [excursionKey, setExcursionKey] = useState('');
	const id = Number(useParams().id);
	const { isModalOpen, openModal, closeModal } = useModal();

	const { createPayment, isSuccess, errorMessage } = useCreatePayment();

	const { data: excursion, isLoading, isError, error } = useQuery({
		queryKey: ['excursion', id],
		queryFn: () => excursionApi.getById(id),
	});

	useEffect(() => {
		if (isSuccess) {
			closeModal();
			setExcursionKey('');
		}
	}, [isSuccess]);

	if (isLoading || !excursion) return <></>;

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
	} = excursion;

	const formattedPrice = formatNumber(price);

	const handlePay = () => {
		if (!excursionKey) return;

		createPayment({
			amount: price,
			excursionId: excursion.id,
			excursionKey,
		});
	};

	const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setExcursionKey(e.target.value);
	};

	return (
		<Page className={styles.excursionPage}>
			<BreadcrumbsWithNavButton className={styles.breadcrumbs} />
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
						{errorMessage && (
							<p className={styles.error}>Ошибка: {errorMessage}</p>
						)}
						<div className={styles.formContainer}>
							<TextInput
								className={styles.modalInput}
								placeholder='Поле для ввода ключа'
								value={excursionKey}
								onChange={handleKeyChange}
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

export default ExcursionPage;
