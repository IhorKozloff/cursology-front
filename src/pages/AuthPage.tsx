import { AuthForms } from '../components/AuthForms/AuthForms';
import { IUserAuth } from 'interfaces';
import { useRegisterMutation, useLoginMutation, onLogInSuccess, setLessonsProgressData, setLikedCoursesServerData } from 'store';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

interface IErrorData {
    status: number,
    message: string
}

export default function AuthPage () {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState<Pick<IUserAuth, 'email' | 'password' | 'name'> | null>(null);

    const [fetchRegister, registerResult] = useRegisterMutation();
    const [fetchLogin, loginResult] = useLoginMutation();

    useEffect(() => {
        if(loginResult.isSuccess) {

            dispatch(onLogInSuccess(loginResult.data));
            dispatch(setLessonsProgressData(loginResult.data.lessonsProgress));
            dispatch(setLikedCoursesServerData(loginResult.data.liked_courses_ids));

            navigate('/');
        }
        
    },[dispatch, loginResult.data, loginResult.isSuccess, navigate]);

    useEffect(() => {

        if(loginResult.error !== undefined && 'data' in loginResult.error) {

            try {
                toast.error(`${(loginResult.error.data as IErrorData).message}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } catch {
                toast.error('Oops, something wrong. Check your data please.', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } finally {
                loginResult.reset();
            }
            
        }
    });
    useEffect(() => {
        if(registerResult.error !== undefined && 'data' in registerResult.error) {

            try {
                toast.error(`${(registerResult.error.data as IErrorData).message}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } catch {
                toast.error('Oops, something wrong. Check your data please.', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } finally {
                registerResult.reset();
            }
            
        }
    });

    const handleRegisterSuccessAfter = () => {
        if(registerResult.isSuccess && registerData !== null) {
            fetchLogin({
                email: registerData.email,
                password: registerData.password
            });
            setRegisterData(null);
        }
    };

    const handleLoginSubmit = (userData: Pick<IUserAuth, 'email' | 'password'>) => {
        fetchLogin(userData);
    };

    const handleRegisterSubmit = (userData: Pick<IUserAuth, 'email' | 'password' | 'name'>) => {
        setRegisterData(userData);
        fetchRegister(userData);
    };

    return (
        <AuthForms 
            onLoginSubmit={handleLoginSubmit} 
            onRegisterSubmit={handleRegisterSubmit}
            registerSuccess={registerResult.isSuccess}
            registerLoading={registerResult.isLoading}
            loginLoading={loginResult.isLoading}
            onOkBtnClick={handleRegisterSuccessAfter}
        />
    );
}