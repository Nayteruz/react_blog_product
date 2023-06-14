import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className, title, feedbackTitle, hasFeedback, onCancel, onAccept,
    } = props;
    const { t } = useTranslation();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCont] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCont(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
        </>
    );

    return (
        <Card className={cn('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            {!isTabletOrMobile && (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32">
                        {modalContent}
                        <HStack gap="16" justify="space-between">
                            <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandler}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
            {isTabletOrMobile && (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            )}
        </Card>
    );
});
