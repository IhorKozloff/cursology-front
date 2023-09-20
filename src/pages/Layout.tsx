import { Outlet } from 'react-router-dom';
import { Header } from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// interface OutletProps {
//     context?: unknown;
//   }
//   declare function Outlet(
//     props: OutletProps
//   ): React.ReactElement | null;

export default function Layout () {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <ToastContainer/>
        </>
        
    );
}