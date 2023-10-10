import React from "react";

import { useForm } from "react-hook-form";
import Header from "../../components/Header/header";
import { sendProduct } from "../../api/product/postProduct";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


function ProductForm() {
    const { register, handleSubmit, formState: { erros } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        sendProduct(data).then((response) => {
            if([200, 201, 202].includes(response.status)){
                navigate('/product')
            }
        })
        
    }

    return ( 
        <>
        <Header/>
        <div>
            <div><h1>Cadastrar Produto</h1></div>
            <div style={{margin: "1%"}}>
                {/* <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                </Formik> */}
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                    {/* <Form.Label>First name</Form.Label> */}
                    <Form.Control
                        required
                        type="text"
                        name="name"
                        placeholder="Nome"
                        // isValid={touched.firstName && !errors.firstName}
                        {...register("name")}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                    {/* <Form.Label>First name</Form.Label> */}
                    <Form.Control
                        required
                        type="text"
                        name="description"
                        placeholder="Descrição"
                        // isValid={touched.firstName && !errors.firstName}
                        {...register("description")}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                    {/* <Form.Label>First name</Form.Label> */}
                    <Form.Control
                        required
                        type="number"
                        name="category_id"
                        placeholder="Categoria"
                        // isValid={touched.firstName && !errors.firstName}
                        {...register("category")}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
        </>
    )
}

export default ProductForm;