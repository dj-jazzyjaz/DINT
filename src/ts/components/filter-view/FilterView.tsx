import * as React from 'react';
import styled from 'styled-components';
import { MockProducts } from './mock/MockProducts';
import { ProductCard } from './ProductCard';

export const FilterView: React.FC<{}> = ({}) => {
    const productCards = React.useMemo(
        () => MockProducts.map(product => <ProductCard product={product} />),
        [MockProducts]
    );

    return (
        <FilterViewContainer>
            <HeaderText>My recurring purchases</HeaderText>
            {productCards}
        </FilterViewContainer>
    );
};

const HeaderText = styled('span')`
    font-size: 16px;
    font-weight: bold;
`;

const FilterViewContainer = styled('div')`
    padding: 10px 0px;
    display: block;
`;