import React from 'react'
import { Input } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signUp } from '../../redux/actions/UserActions/UserActions';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

export default function SignUp() {
    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            passWord: "",
            name: "",
            phoneNumber: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please enter your name').min(3, 'Name should be between 3 and 6 characters').max(12, 'Name should be between 3 and 12 characters'),
            passWord: Yup.string().required('Please enter your password').min(6, 'Account should be between 6 and 12 characters').max(12, 'Account should be between 6 and 12 characters'),
            email: Yup.string().required('Please enter your email').email('Please enter a valid email address'),
            phoneNumber: Yup.string().required('Please enter your phone number').matches(/^[0-9]+$/, 'Phonenumber should be number'),
        }),
        onSubmit: values => {
            // dang ki thanh cong
            console.log(values);
            dispatch(signUp(values))
        },

    })
    return (
        <div className='signUp flex justify-center items-center h-screen'>
            <form action="#" onSubmit={formik.handleSubmit} className='w-1/3 text-center'>
                <h2 className='text-3xl'>Register Cyberbugs</h2>
                <Input name='name' size="large" placeholder="name" prefix={<UserOutlined />} className='mt-5' onChange={formik.handleChange} />
                {formik.touched.name && formik.errors.name ? (
                    <div className='text-red-700 mb-4'>{formik.errors.name}</div>
                ) : <div className='mb-4'></div>}
                <Input name='email' size="large" placeholder="email" prefix={<MailOutlined />} className='mt-5' onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? (
                    <div className='text-red-700 mb-4'>{formik.errors.email}</div>
                ) : <div className='mb-4'></div>}
                <Input name='phoneNumber' size="large" placeholder="phone number" prefix={<PhoneOutlined />} className='mt-5' onChange={formik.handleChange} />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className='text-red-700 mb-4'>{formik.errors.phoneNumber}</div>
                ) : <div className='mb-4'></div>}
                <Input name='passWord' size="large" placeholder="password" prefix={<LockOutlined />} className='mt-5' onChange={formik.handleChange} />
                {formik.touched.passWord && formik.errors.passWord ? (
                    <div className='text-red-700 mb-4'>{formik.errors.passWord}</div>
                ) : <div className='mb-4'></div>}
                <Button htmlType="submit" className='mt-5 w-full' style={{ background: '#6b62ff', color: 'white' }}>Register</Button>
                <p className='mt-5'>Already have an account ? <a href="#">Login now</a></p>
                <div className='flex justify-center'>
                    <a href="#"><FontAwesomeIcon icon="fab fa-facebook" className='text-3xl m-2' /></a>
                    <a href="#"><FontAwesomeIcon icon="fab fa-twitter" className='text-3xl m-2' /></a>
                </div>
            </form>
        </div>
    )
}
