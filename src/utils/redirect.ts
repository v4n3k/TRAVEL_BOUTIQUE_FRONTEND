const PHONE_NUMBER = '79993591601';
const TG_GROUP_NAME = 'travel_butik_2020';

export const WHATS_APP_URL = `https://wa.me/${PHONE_NUMBER}`;
export const TELEGRAM_URL = `https://t.me/${TG_GROUP_NAME}`;

export const openWhatsApp = () => {
	window.open(WHATS_APP_URL, '_blank');
};

export const openTelegram = () => {
	window.open(TELEGRAM_URL, '_blank');
};
