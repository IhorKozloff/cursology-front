import { Button } from 'components/ReusableComponents';
import { Link } from 'react-router-dom';
import './ErrorPageComponent.css';

export const ErrorPageComponent = () => {

    return (
        <div className="err-wrapper">
            <div className="main">
                <h1>404</h1>
                <div className="animate-bounce w-40 h-40 err-ghost-bg"/>
                <h2>Error: 404 page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed</p>

                <Link to={'/'} className="mt-10">
                    <Button type="button" variant="secondary" size="medium" color="white">Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};
