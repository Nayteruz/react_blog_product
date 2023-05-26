import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import ListBox from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            {/* eslint-disable i18next/no-literal-string */}
            <div>sdasdasd asdas dasd asd</div>
            <div>sdasdasd asdas dasd asd</div>
            <HStack>
                <div>sdasdasd asdas dasd asd</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value) => {}}
                    items={[
                        { value: '1', content: 'test test 1' },
                        { value: '2', content: 'test test 2' },
                        { value: '3', content: 'test test 3', disabled: true },
                        { value: '4', content: 'test test 4' },
                    ]}
                />
            </HStack>
            <div>sdasdasd asdas dasd asd</div>
            <div>sdasdasd asdas dasd asd</div>
            <div>sdasdasd asdas dasd asd</div>
            <div>sdasdasd asdas dasd asd</div>
            <div>sdasdasd asdas dasd asd</div>
        </Page>
    );
};

export default MainPage;
