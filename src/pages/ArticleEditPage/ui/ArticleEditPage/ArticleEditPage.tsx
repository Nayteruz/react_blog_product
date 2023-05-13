import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleEditPage.module.scss';

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
        <Page className={cn(cls.ArticleEditPage, {}, [className])}>
            <Text title={titlePage} />
        </Page>
    );
});

export default ArticleEditPage;
