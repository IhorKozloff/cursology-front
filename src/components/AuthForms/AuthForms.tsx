import './AuthForms.css'; 
import { Formik, Form, Field } from 'formik';
import { SiMaildotru } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';
import { TbUser } from 'react-icons/tb';
import { FiCheckCircle } from 'react-icons/fi';
import { IUserAuth } from 'interfaces';
import { PropagateLoader, HashLoader } from 'react-spinners';
import { ModalWindowBackdrop } from 'components';

interface IProps {
    onLoginSubmit: (userAuthData:Pick<IUserAuth, 'email' | 'password'>) => void;
    onRegisterSubmit: (userAuthData: Pick<IUserAuth, 'email' | 'password' | 'name'>) => void;
    onOkBtnClick: () => void;
    registerSuccess: boolean;
    registerLoading: boolean;
    loginLoading: boolean;
}
export const AuthForms = ({onLoginSubmit, onRegisterSubmit, onOkBtnClick, registerSuccess, registerLoading, loginLoading}: IProps) => {

    const initialLogIn: Pick<IUserAuth, 'email' | 'password'> = {
        email: '',
        password: ''
    };
    const initialRegister: Pick<IUserAuth, 'email' | 'password' | 'name'> = {
        email: '',
        password: '',
        name: ''
    };

    return (
        <div className="authFormsWrapper relative z-50">
            <div className="section">
                <div className="container mx-auto ralative">
                    {registerSuccess && registerLoading === false && loginLoading && 
                    <div className="absolute top-0 left-0 w-full h-full flex-center-center bg-[#1f2029] z-50">
                        <HashLoader color="#fff"/>
                    </div>                 
                    }
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    {loginLoading === false && <h4 className="mb-4 pb-3">Log In</h4>}
                                                    <Formik initialValues={initialLogIn} onSubmit={(values, actions) => {
                                                        onLoginSubmit(values);
                                                        actions.resetForm();
                                                    }}> 
                                                        <Form>
                                                            {loginLoading === false &&
                                                                <>
                                                                    <div className="relative mb-2">
                                                                        <Field type="email" name="email" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
                                                                        <div>
                                                                            <SiMaildotru className="input-icon"/>
                                                                        </div>
                                                                    </div>	
                                                                    <div className="relative">
                                                                        <Field type="text" name="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
                                                                        <div>
                                                                            <RiLockPasswordLine className="input-icon uil"/>
                                                                        </div>
                                                                    </div>
                                                                    <button type="submit" className="btn mt-4">submit</button>
                                                                </>
                                                            }
                                                            {loginLoading &&

                                                                <div className="h-[230px] text-Green uppercase flex-center-center flex-col">
                                                                    <PropagateLoader color="#36d7b7" />
                                                                </div>
                                                            }
                                                        </Form>
                                                    </Formik>
                                                    {loginLoading === false &&<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    {registerLoading === false && (registerSuccess ? <h4 className="mb-4 pb-3">Great!</h4> : <h4 className="mb-4 pb-3">Sign Up</h4>)}
                                                    <Formik initialValues={initialRegister} onSubmit={(values, actions) => {
                                                        onRegisterSubmit(values);
                                                        actions.resetForm();
                                                    }}>
                                                        <Form>
                                                            {registerSuccess === false && registerLoading === false &&
                                                                <>
                                                                    <div className="relative mb-2">
                                                                        <Field type="text" name="name" className="form-style" placeholder="Your Full Name" id="regname" autoComplete="off"/>
                                                                        <div>
                                                                            <TbUser className="input-icon"/>
                                                                        </div>
                                                                    </div>	
                                                                    <div className="relative mb-2">
                                                                        <Field type="email" name="email" className="form-style" placeholder="Your Email" id="regemail" autoComplete="off"/>
                                                                        <div>
                                                                            <SiMaildotru className="input-icon"/>
                                                                        </div>
                                                                    </div>	
                                                                    <div className="relative">
                                                                        <Field type="text" name="password" className="form-style" placeholder="Your Password" id="regpass" autoComplete="off"/>
                                                                        <div>
                                                                            <RiLockPasswordLine className="input-icon"/>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            }
                                                            {registerSuccess === false && registerLoading &&
                                                                <div className="h-[230px] text-Green uppercase
                                                                 flex-center-center flex-col">
                                                                    <PropagateLoader color="#36d7b7" />
                                                                </div>
                                                            }
                                                            
                                                            {registerSuccess && registerLoading === false &&
                                                              
                                                                    <div className="h-[230px] text-Green uppercase
                                                                    flex flex-col items-center">
                                                                        <FiCheckCircle size={80}/>
                                                                        <h4 className="text-GreenLight my-6">Congratulations</h4>
                                                                        <p className="text-[#ffeba7]">Your registration has been successful</p>
                                                                        <ModalWindowBackdrop></ModalWindowBackdrop>
                                                                    </div>
                                                             
                                                            }
                                                            {registerLoading === false && (registerSuccess ? <button type="button" className="btn" onClick={onOkBtnClick}>Ok</button> : <button type="submit" className="btn mt-4">submit</button>)}
                                                            
                                                        </Form>
                                                    </Formik>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
};