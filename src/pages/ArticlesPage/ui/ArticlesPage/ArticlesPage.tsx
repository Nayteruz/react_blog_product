import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const articles = [
    {
        id: '1',
        title: 'Javascript news text title for example',
        subtitle: 'Что нового в JS за 2022 год?',
        // eslint-disable-next-line max-len
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tYaggzZtrVKys9HdormuKkMqVJq-MEAmAurUaMaeC-rVeFQ6b5Q2m6S1liToWzmADjY&usqp=CAU',
        views: 1000,
        createdAt: '26.02.2022',
        // eslint-disable-next-line max-len
        user: { id: '1', username: 'User test', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tYaggzZtrVKys9HdormuKkMqVJq-MEAmAurUaMaeC-rVeFQ6b5Q2m6S1liToWzmADjY&usqp=CAU' },
        type: [
            'IT',
            'SCIENCE',
            'POLITICS',
            'ECONOMICS',
        ],
    },
];

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const article = articles[0];
    return (
        <div className={cn(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.LIST}
                articles={
                (new Array(16)
                    .fill(0)
                    .map((item, index) => ({
                        ...article,
                        id: index.toString(),
                    }))
                ) as Article[]
                }
            />
        </div>
    );
};

export default memo(ArticlesPage);
