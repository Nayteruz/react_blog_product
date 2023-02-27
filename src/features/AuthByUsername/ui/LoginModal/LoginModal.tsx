import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={cn(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onCLose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
