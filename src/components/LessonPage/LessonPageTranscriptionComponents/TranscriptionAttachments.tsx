import { Icon } from 'components/ReusableComponents';
import { ILessonAttachment } from 'interfaces';
import { baseUrl } from 'constatnts/baseUrl';

interface IProps {
    attachments: ILessonAttachment;
}

export const TranscriptionAttachments = ({attachments}: IProps) => {

    return (
        <div className="attachemensts">
            <h4 className="mb-8">Lesson attachment</h4>
            <ul className="mb-[33px]">
                {attachments.files.map((item, index) => {
                    return (
                        <li key={index} className="flex items-start gap-4 mb-6 last:mb-0">
                            <a href={`${baseUrl}${item.file_path}`} download>
                                <Icon name="zip" wrapStyle="wrap-round-increase" wrapColor="yellow"/>
                            </a>
                            <div className="[&_span]:block">
                                <span className="text-style__body2--medium">{item.file_name}</span>
                                <span className="text-Grey text-style__body2--regular">{item.file_size}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            
            {attachments.multiply_files_path.length !== 0 && 
                <div>
                    <a href={`${baseUrl}${attachments.multiply_files_path}`} download className="text-Blue text-style__body3--bold">
                        Download all
                    </a>
                </div>
            }
        </div>
    );
};