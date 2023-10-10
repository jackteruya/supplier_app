import React from "react";

import { useForm } from "react-hook-form";
import Header from "../../components/Header/header";
import { sendCategory } from "../../api/category/postCategory";
import { Button } from 'react-bootstrap';
// import * as formik from 'formik';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


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
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
        </>
    )
}

export default CategoryForm;