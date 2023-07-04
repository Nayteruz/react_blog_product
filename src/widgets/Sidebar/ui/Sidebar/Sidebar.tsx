import { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/langSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => setCollapsed((prev) => !prev);

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <aside
            data-testid="sidebar"
            className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cn(cls.collapseBtn)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher center={collapsed} />
            </div>
        </aside>
    );
});
