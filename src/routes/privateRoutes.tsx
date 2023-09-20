import { Navigate } from 'react-router-dom';
import { useAppSelector} from 'hooks';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {

    const isLogIn = useAppSelector(state => state.userAuthClientData.isLogIn);

    return <>{isLogIn === true ? children : <Navigate to="/authorization"/>}</>;
};