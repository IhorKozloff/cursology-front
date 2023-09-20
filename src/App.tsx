import { Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import PrivateRoute from 'routes/privateRoutes';
import PublicRoute from 'routes/publicRoutes';
import { DotLoader } from 'react-spinners';

const Layout = lazy(() => import('pages/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const CourseByIdPage = lazy(() => import('pages/CourseByIdPage'));
const CoursesLibrary = lazy(() => import('pages/CoursesLibrary'));
const LessonPage = lazy(() => import('pages/LessonPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

export const App = () => {

    return (
        <Suspense fallback={<div className="fixed w-full h-full flex-center-center"><DotLoader color={'#158FFF'} size={120}/></div>}>
            <Routes>

                <Route path="/" element={<Layout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route 
                        path="library"
                        element={
                            <PrivateRoute>
                                <CoursesLibrary/>
                            </PrivateRoute>
                        }
                    />

                    <Route 
                        path="course/:courseId"
                        element={
                            <PrivateRoute>
                                <CourseByIdPage/>
                            </PrivateRoute>
                        }
                    />

                    <Route 
                        path="course/:courseId/:lesson"
                        element={
                            <PrivateRoute>
                                <LessonPage/>
                            </PrivateRoute>
                        }
                    />
            
                    <Route 
                        path="authorization" 
                        element={
                            <PublicRoute>
                                <AuthPage/>
                            </PublicRoute>
                        }
                    />
                
                    <Route path="*" element={<ErrorPage />}/>
                </Route>
      
            </Routes>
        </Suspense>
    );
};