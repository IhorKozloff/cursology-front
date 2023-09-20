import { primaryCategories } from 'constatnts/primaryCategories'; 

interface IProps {
    primaryCategoryId: string;
    setTopic: (topic: string) => void; 
}

export const CoursesTopicsBar = ({ primaryCategoryId, setTopic }: IProps) => {

    const currentCategory = primaryCategories.find(item => item.categoryID === primaryCategoryId);
    
    return (
        <section className="topics-group pt-18 pb-6">
            <div className="container">
                <ul className="flex gap-8 flex-wrap">
                    {currentCategory?.recomended_topics.map(({topic_name, topic_id}) => {
                        return (
                            <li key={topic_name}>
                                <button 
                                    className="w-70 h-16 flex-center-center rounded text-style__body2--bold text-Blue border border-Black/10 hover:bg-Blue/10 active:scale-95" 
                                    type="button"
                                    onClick={() => setTopic(topic_id)}
                                >
                                    {topic_name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};