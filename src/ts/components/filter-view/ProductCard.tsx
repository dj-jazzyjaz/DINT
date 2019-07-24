import * as React from 'react';
import styled from 'styled-components';
import { green } from '../styles/themes';
import { Product } from '../../background/store/reducers';
import { CheckboxChecked, CheckboxUnchecked } from '../../../assets/SVGIcons';
import { ButtonUnstyled } from '../styles/sharedElements';
import { useDispatch } from 'react-redux';
import { unfilterProduct } from '../../background/store/actions';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useDispatch();

    const [checked, setChecked] = React.useState(true);
    const timeoutRef = React.useRef<NodeJS.Timeout>();
    const checkedRef = React.useRef(checked);

    checkedRef.current = checked;

    const toggleChecked = React.useCallback(() => {
        setChecked(!checked);

        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            if (!checkedRef.current) {
                dispatch(unfilterProduct(product));
            }
        }, 2000);
    }, [checked, setChecked, dispatch, product])

    return (
        <React.Fragment>
            <ProductCardContainer>
                <CheckboxContainer>
                    <ButtonUnstyled onClick={toggleChecked}>
                        <CheckboxIconContainer>
                            {checked ? CheckboxChecked : CheckboxUnchecked}
                        </CheckboxIconContainer>
                    </ButtonUnstyled>
                    <CheckboxMessage>Do not notify me for repurchase</CheckboxMessage>
                </CheckboxContainer>
                <ProductInfoContainer>
                    <ProductImage src={product.imgSrc} />
                    <ProductDetailsContainer>
                        <ProductName>{product.name}</ProductName>
                        <ProductDetail>
                            <ProductDetailLabel>From:</ProductDetailLabel>
                            <ProductSource>{product.site}</ProductSource>
                        </ProductDetail>
                        <ProductDetail>
                            <ProductDetailLabel>Price:</ProductDetailLabel>
                            <ProductPrice>${product.cost}</ProductPrice>
                        </ProductDetail>
                    </ProductDetailsContainer>
                </ProductInfoContainer>
            </ProductCardContainer>
            <hr />
        </React.Fragment>
    )
};

const ProductCardContainer = styled('div')`
    padding: 10px 0px;
    display: block;
`;

const CheckboxContainer = styled('div')`
    padding-bottom: 10px;
    display: inline-flex;
`;

const CheckboxIconContainer = styled('div')`
    display: flex;
    border: 2px solid ${green};
    border-radius: 2px;
`;

const CheckboxMessage = styled('span')`
    padding: 0px 5px;
    font-size: 14px;
    line-height: 32px;
`;

const ProductInfoContainer = styled('div')`
    display: inline-flex;
`;

const ProductDetailsContainer = styled('div')`
    margin: 10px;
    display: flex;
    flex-direction: column;
`;

const ProductDetail = styled('div')`
    display: inline-block;
    padding-top: 6px;
`;

const ProductDetailLabel = styled('span')`
    font-size: 12px;
    font-weight: bold;
    padding-right: 4px;
`;

const ProductSource = styled('span')`
    font-size: 12px;
    font-weight: 600;
    color: darkgray;
`;

const ProductPrice = styled('span')`
    font-size: 12px;
    font-weight: bold;
    color: orange;
`;

const ProductName = styled('div')`
    font-size: 12px;
    font-weight: bold;
    color: ${green};
`;

const ProductImage = styled('img')`
    width: 128px;
`;