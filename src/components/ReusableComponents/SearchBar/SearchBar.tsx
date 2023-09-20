import { Formik, Form, Field } from 'formik';
import { Icon } from '../Icon/Icon';

interface IProps {
    searchBarAction: (searchQuery: string) => void;
}

export const SearchBar = ({searchBarAction}: IProps) => {

    const initialValues = {query: ''};

    return (
       
        <Formik initialValues={initialValues} onSubmit={(values, {resetForm}) => {
            searchBarAction(values.query);
            resetForm();
        }}>
            <Form className="relative">
                <Field itype={'text'} name="query" placeholder="Search for anything" className="h-[64px] w-[800px] bg-White py-5 px-6 outline-none cursor-pointer"/>
                <button type="submit" className="absolute top-1/2 right-0 -translate-x-6 -translate-y-4 hover:[&_svg]:text-Black [&_svg]:transition-all [&_svg]:duration-300 active:scale-95 p-2">
                    <Icon name="search" color="blue"/>
                </button>
            </Form>
        </Formik>
    );
};