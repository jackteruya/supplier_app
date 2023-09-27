import React from "react";

import { useForm } from "react-hook-form";
import Header from "../../components/Header/header";
import { sendCategory } from "../../api/postCategory";
import { Button } from 'react-bootstrap';


function CategoryForm() {
    const { register, handleSubmit, formState: { erros } } = useForm();

    const onSubmit = data => {
        sendCategory(data)
    }

    return (
        <>
        <Header/>
        <div>
            <div><h1>Cadastrar Categoria</h1></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nome</label>
                        <input type="text" name="name" {...register("name")}/>
                    </div>
                    <div>
                        <Button type="submit">Cadastrar</Button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default CategoryForm;