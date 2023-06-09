import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'stretch', children } = props;
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Flex direction="column" {...props} align={align}>
            {children}
        </Flex>
    );
};
