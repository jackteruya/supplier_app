import React from "react";
import { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';

import Header from "../../components/Header/header";

import { loadProducts } from "../../api/product/getProducts";


function Product() {

    const [productsList, setProductList] = useState([])

    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);

    const [next, setNext] = useState(0);
    const [previous, setPrevious] = useState(0);

    const handleLoadProducts = useCallback(async(limit, offset) => {
        const response = await loadProducts(limit, offset);
        console.log(response)
        if(response.status == 200){
            setProductList(response.data.results)
            if(response.data.next){
                setOffset(offset+limit)
                setNext(offset+limit)
                console.log(offset+limit)
            }
            if(response.data.previous){
                setOffset(offset-limit)
                setPrevious(offset-limit)
            }
            
        }
    }, []);
  
    useEffect(() =>{
        handleLoadProducts(limit, offset);
    }, [handleLoadProducts])

    const prevPage = () => {
        handleLoadProducts(limit, previous);
    }

    const nextPage = () => {
        handleLoadProducts(limit, next);
    }

    return (
        <>
        <Header />
        <h1>Produtos</h1>
        <div style={{margin: "1%"}}>
            <div>
                <Button href="/product/cadastrar">Novo</Button>
            </div>
        <Table striped="columns">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        {productsList.map((product, index) => {
            return (
            <tr>
            <th>{product.id}</th>
            <th>{product.name}</th>
            <th>{product.category.id} - {product.category.name}</th>
            <th>
                <Button style={{margin: "1px"}}>Editar</Button>
                <Button style={{margin: "1px"}}>Excluir</Button>
            </th>
            </tr>
            )})}
        </tbody>
                
        </Table>
        </div>
        <div>
        <Pagination>
            <Pagination.Prev onClick={prevPage}/>
            <Pagination.Next onClick={nextPage} />
        </Pagination>
        </div>
        </>
    )
}

export default Product;