import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard
                title="Оставьте отзыв о статье"
                feedbackTitle="Опишите что понравилось?"
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
