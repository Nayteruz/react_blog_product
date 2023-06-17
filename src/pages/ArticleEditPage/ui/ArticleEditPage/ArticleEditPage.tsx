import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    const titlePage = isEdit
        ? `${t('Редактирование статьи c ID =')} ${id}`
        : t('Создание новой статьи');

    return (
        <Page className={cn('', {}, [className])}>
            <Text title={titlePage} />
        </Page>
    );
});

export default ArticleEditPage;
