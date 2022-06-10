import React from 'react'
import loginImg from '../../assets/image/login.PNG'
import { Input, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn } from '../../redux/actions/UserActions/UserActions';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { TOKEN } from '../../util/setting';
import { userServices } from '../../services/UsersServices';

export default function SignIn() {
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            passWord: "",
        },
        onSubmit: values => {
            dispatch(signIn(values))
        },
    })

    if (localStorage.getItem(TOKEN)) {
            message.success('You have succesfully signed in our website.');
            // history.goBack()
            return null
        
    } else {
        return (
            <div className="signIn flex">
                <div className='signIn-left w-1/2'>
                    <img src={loginImg} alt="" className='h-screen' />
                </div>
                <div className="signIn-right w-1/2 text-center flex justify-center items-center">
                    <div className='w-1/2'>
                        <h2 className='text-3xl'>Login</h2>
                        <form action="#" onSubmit={formik.handleSubmit}>
                            <Input name='email' size="large" placeholder="email" prefix={<MailOutlined />} onChange={formik.handleChange} />
                            <Input name='passWord' size="large" placeholder="password" prefix={<LockOutlined />} className='mt-5' onChange={formik.handleChange} />
                            <Button htmlType="submit" className='mt-5 w-full' style={{ background: '#6b62ff', color: 'white' }}>Login</Button>
                            <p className='mt-5'>Dont't have an account yet? <a href="#">Register now</a></p>
                            <div className='flex justify-center'>
                                <a href="#"><FontAwesomeIcon icon="fab fa-facebook" className='text-3xl m-2' /></a>
                                <a href="#"><FontAwesomeIcon icon="fab fa-twitter" className='text-3xl m-2' /></a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
