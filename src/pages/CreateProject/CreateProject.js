import { Button, Form, Input } from 'antd'
import React, { useEffect, useRef } from 'react'
import { Select } from 'antd';

import { Editor } from '@tinymce/tinymce-react';
import { createProject, getProjectCategory } from '../../redux/actions/ProjectsActions/ProjectActions';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function CreateProject() {
    const { Option } = Select;
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
        }
    };
    log()

    let dispatch = useDispatch()

    useEffect(() => {
        callAPI()
    }, [])
    const callAPI = () => {
        const action = getProjectCategory()
        dispatch(action)
    }
    const { projectCategory } = useSelector(state => state.ProjectsReducer)

    const formik = useFormik({
        initialValues: {
            projectName: "",
            description: "",
            categoryId: "",
            alias: ""
        },
        validationSchema: Yup.object({
            projectName: Yup.string().required('Please enter your project name'),
            description: Yup.string().required('Please enter your description'),
            categoryId: Yup.string().required('Please select your category'),

        }),
        onSubmit: values => {
            // dang ki thanh cong
            console.log(values);
            dispatch(createProject(values))
        },

    })
    return (
        <div className="flex justify-center items-center">
            <div className='container m-5 w-2/3'>
                <h2 className='text-3xl'>Create Project</h2>
                <form action="#" onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <p className='font-bold'>Name</p>
                        <Input name='projectName' size="large" placeholder="Name" onChange={formik.handleChange} />
                        {formik.touched.projectName && formik.errors.projectName ? (
                            <div className='text-red-700 mb-4'>{formik.errors.projectName}</div>
                        ) : <div className='mb-4'></div>}
                    </div>
                    <div className="mb-3">
                        <p className='font-bold'>Project Category</p>

                        <Form.Item  >
                            <Select name='categoryId'   value={formik.values.categoryId} onChange={(value) => formik.setFieldValue("categoryId", value)}>
                                {projectCategory.map((project) => {
                                    return <Select.Option key={project.id} value={project.id}>{project.projectCategoryName}</Select.Option>
                                })}
                            </Select>
                        </Form.Item>
                        {formik.touched.categoryId && formik.errors.categoryId ? (
                            <div className='text-red-700 mb-4'>{formik.errors.categoryId}</div>
                        ) : <div className='mb-4'></div>}
                    </div>
                    <div className="mb-3">
                        <p className='font-bold'>Description</p>
                        <Editor
                            name='description'
                            onEditorChange={(e) => {
                                formik.handleChange({ target: { name: 'description', value: e } })
                            }}
                            apiKey='your-api-key'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className='text-red-700 mb-4'>{formik.errors.description}</div>
                        ) : <div className='mb-4'></div>}
                    </div>


                    <div className='flex'>
                        <Button className='mt-5 w-1/7 mr-2' style={{ background: 'gray', color: 'white' }}>Cancel</Button>
                        <Button htmlType="submit" className='mt-5 w-1/7' style={{ background: '#6b62ff', color: 'white' }} >Create</Button>

                    </div>
                </form>
            </div>
        </div>

    )
}
