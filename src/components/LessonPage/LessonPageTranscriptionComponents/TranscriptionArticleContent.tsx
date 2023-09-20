import { IArticleContent } from 'interfaces';
import { baseUrl } from 'constatnts/baseUrl';

interface IProps {
    lessTypeArticleData: IArticleContent[]
}

export const TranscriptionArticleContent = ({lessTypeArticleData: data}: IProps) => {
    return (
        <ul>
            {
                data.map(({title, content}) => {
                    return (
                        <li key={title} className="mb-8 last:mb-0">
                            <h4 className="mb-8">{title}</h4>
                            <ul>
                                {content.map(({content_type, content_value}, idx) => {
                                    return (
                                        <li key={idx} className="mb-8 last:mb-0">
                                            {content_type === 'text' && <p>{content_value}</p>}
                                            {content_type === 'link' && <iframe 
                                                width="100%" height="400px" 
                                                src={`${content_value}`} title={title}
                                                loading="lazy"/>}
                                            {content_type === 'img' && <img width="100%" height="auto" src={`${baseUrl}${content_value}`} alt={`${title}`}/>}
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })
            }
        </ul>
    );
};