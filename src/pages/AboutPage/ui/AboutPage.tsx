import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const createMarkup = () => ({ __html: t('О сайте') });

    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
    );
};

export default AboutPage;
