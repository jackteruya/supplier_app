import React from 'react';

import { useCallback, useEffect, useState } from 'react';
import { loadCategories } from '../../api/getCategory';

import Header from '../../components/Header/header';
import { Button, Table } from 'react-bootstrap';


function Categories() {
  const [categoriesList, setcategoriesList] = useState([])

  const handleLoadCategories = useCallback(async() => {
    const response = await loadCategories();
    console.log('dddd', response.results)
    setcategoriesList(response.results)
  }, [])

  useEffect(() =>{
    handleLoadCategories();
  }, [handleLoadCategories])

  return (
    <>
    <Header />
    <h1>Categorias</h1>
    <div>
      <div>
        <Button href="/category/cadastrar">Novo</Button>
      </div>
    <Table striped="columns">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      {categoriesList.map((category, index) => {
        return (
          <tr>
          <th>{category.id}</th>
          <th>{category.name}</th>
          <th>
            <Button>Editar</Button>
            <Button>Excluir</Button>
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

export default Categories;