import React from "react";
import { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

import Header from "../../components/Header/header";

import { loadSuppliers } from "../../api/supplier/getSupplier";


function Supplier() {

    const [suppliersList, setsuppliersList] = useState([])

    const handleLoadSuppliers = useCallback(async() => {
      const response = await loadSuppliers();
      console.log('dddd', response.results)
      setsuppliersList(response.results)
    }, [])
  
    useEffect(() =>{
        handleLoadSuppliers();
    }, [handleLoadSuppliers])

    return (
        <>
        <Header />
        <h1>Fornecedores</h1>
        <div>
        <Table striped="columns">
        <thead>
            <tr>
                <th>ID</th>
                <th>Razão Social</th>
                <th>CNPJ</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        {suppliersList.map((supplier, index) => {
            return (
            <tr>
            <th>{supplier.id}</th>
            <th>{supplier.fantasy_name}</th>
            <th>{supplier.cnpj}</th>
            <th>{supplier.address[0].street_address}, {supplier.address[0].number}, {supplier.address[0].city} - {supplier.address[0].state}</th>
            <th>{supplier.telephone[0].ddd} {supplier.telephone[0].number}</th>
            <th>
                <Button style={{margin: "1px"}}>Editar</Button>
                <Button style={{margin: "1px"}}>Excluir</Button>
            </th>
            </tr>
            )
                    
                })}
        </tbody>
                
        </Table>
        </div>
        </>
    )
}

export default Supplier;