import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
import { RouteBase } from '../../types/routes';
import { formatNumber, truncateText } from '../../utils/format';
import styles from './ExcursionPage.module.css';

const BASE_URL =
	process.env.NODE_ENV === 'dev'
		? 'http://localhost:4200'
		: 'https://xn----9sbelapeid5cyafedff1g.xn--p1ai';

const ExcursionPage = () => {
	const [phone, setPhone] = useState('');
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

	if (isLoading || !excursion) {
		return (
			<Helmet>
				<title>Загрузка экскурсии...</title>
				<meta name='description' content='Загружаем информацию об экскурсии.' />
			</Helmet>
		);
	}

	if (isError) {
		return (
			<>
				<Helmet>
					<title>Ошибка — Экскурсия не найдена</title>
					<meta
						name='description'
						content='Произошла ошибка при загрузке экскурсии.'
					/>
				</Helmet>
				<p>Ошибка: {error.message}</p>
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

	const infoText = info
		? truncateText(info, 150)
		: 'Интерактивная экскурсия для школьников';

	const description = `${name} — ${infoText} Подробности и бронирование на сайте.`;

	const handlePay = () => {
		if (!excursionKey || !phone) return;

		createPayment({
			amount: price,
			phone,
			excursionId: excursion.id,
			excursionKey,
		});
	};

	const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setExcursionKey(e.target.value);
	};

	return (
		<>
			<Helmet>
				<title>{name} | Бутик Путешествий</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content={`экскурсия, школьники, взрослые, гид, бронирование, туры, ${name.toLowerCase()}`}
				/>
				<link
					rel='canonical'
					href={`${BASE_URL}/${RouteBase.EXCURSION}/${id}`}
				/>
			</Helmet>

			<Page className={styles.excursionPage}>
				<BreadcrumbsWithNavButton className={styles.breadcrumbs} />
				<Section className={styles.excursion}>
					<div className={styles.imageContainer}>
						<Image src={imgSrc} alt={name} />
						<Price className={styles.priceOnSmallScreen} price={price} />
						<ManagerButton className={styles.managerButton} />
					</div>
					<div className={styles.info}>
						<h1 className={styles.title}>{name}</h1>

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
									type='tel'
									placeholder='+7 (900) 000 00 00'
									value={phone}
									onChange={e => setPhone(e.target.value)}
								/>
								<div className={styles.keyAndPrice}>
									<TextInput
										className={styles.modalInput}
										placeholder='Поле для ввода ключа'
										value={excursionKey}
										onChange={handleKeyChange}
									/>
									<Price className={styles.modalPrice} price={formattedPrice} />
								</div>
								<a
									className={styles.offerAgreement}
									href={'../../../assets/offerAgreementForSchoolchildren.pdf'}
									target='_blank'
									rel='noopener noreferrer'
								>
									Договор оферты для школьников
								</a>
							</div>
							<ModalButton
								backgroundColor='blue-500'
								onClick={handlePay}
								disabled={!excursionKey || !phone}
							>
								Оплатить
							</ModalButton>
						</Form>
					</TitledModal>
				</Section>
			</Page>
		</>
	);
};

export default ExcursionPage;
