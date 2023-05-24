import { Flex, FlexProps } from '../Flex/Flex';
// eslint-disable react/jsx-props-no-spreading
type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'stretch' } = props;
    return (
        <Flex direction="column" {...props} align={align} />
    );
};
