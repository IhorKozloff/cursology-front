import { SearchBar, TabBar } from 'components/ReusableComponents';

interface IProps {
    setSearchQuery: (query: string) => void;
    setCategory: (category: string) => void;
}

export const CoursesLibraryHero = ({setSearchQuery, setCategory}: IProps) => {

    return (
        <section className="background-custom-gradient-black pt-18 pb-28">
            <div className="container flex-center-center pb-2 flex-col overflow-hidden">
                <h3 className="pb-14 w-[500px] text-center text-White">Find a course to help you reach where you want to go</h3>
                <div className="mb-12">
                    <SearchBar searchBarAction={setSearchQuery}/>
                </div>
                <TabBar onClick={setCategory}/>
            </div>
        </section>
    );
}; 