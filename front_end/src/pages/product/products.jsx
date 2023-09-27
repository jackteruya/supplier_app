import React from "react";
import { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

import Header from "../../components/Header/header";

import { loadProducts } from "../../api/getProducts";


function Product() {

    const [productsList, setProductList] = useState([])

    const handleLoadProducts = useCallback(async() => {
      const response = await loadProducts();
      setProductList(response.results)
    }, [])
  
    useEffect(() =>{
        handleLoadProducts();
    }, [handleLoadProducts])

    return (
        <>
        <Header />
        <h1>Produtos</h1>
        <div>
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
                <Button>Editar</Button>
                <Button>Excluir</Button>
            </th>
            </tr>
            )})}
        </tbody>
                
        </Table>
        </div>
        </>
    )
}

export default Product;