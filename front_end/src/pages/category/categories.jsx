import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';

import { loadCategories } from '../../api/category/getCategory';
import { deleteCategoryByID } from '../../api/category/deleteCategoryBy'

import Header from '../../components/Header/header';


function Categories() {

  const [categoriesList, setcategoriesList] = useState([])

  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  const [next, setNext] = useState(0);
  const [previous, setPrevious] = useState(0);

  const handleLoadCategories = useCallback(async(limit, offset) => {
    const response = await loadCategories(limit, offset);

    if(response.status == 200){
      setcategoriesList(response.data.results)

      if(response.data.next){
          setOffset(offset+limit)
          setNext(offset+limit)
      }
      if(response.data.previous){
          setOffset(offset-limit)
          setPrevious(offset-limit)
      }
    }
  }, [])

  useEffect(() =>{
    handleLoadCategories(limit, offset);
  }, [handleLoadCategories])

  const prevPage = () => {
    handleLoadCategories(limit, previous);
  }

  const nextPage = () => {
    handleLoadCategories(limit, next);
  }

  const deleteCaegory = (id) => {
    deleteCategoryByID(id)
    handleLoadCategories(limit, offset)
  }



  return (
    <>
    <Header />
    <h1>Categorias</h1>
    <div style={{margin: "1%"}}>
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
              <Button style={{margin: "1px"}}>Editar</Button>
              <Button style={{margin: "1px"}} onClick={() => deleteCaegory(category.id)}>Excluir</Button>
            </th>
            </tr>
          )
                  
              })}
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

export default Categories;
