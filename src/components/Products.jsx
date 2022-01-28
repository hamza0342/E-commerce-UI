import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import SingleProd from './SingleProd'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(prod => (
                <SingleProd prod= {prod} key={prod.id}/>
            ))}
        </Container>
    )
}

export default Products
