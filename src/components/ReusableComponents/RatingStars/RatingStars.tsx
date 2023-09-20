import { BsStarFill, BsStarHalf } from 'react-icons/bs';

interface IProps {
    rating: number;
}

export const RatingStars = ({rating}: IProps) => {

    const roundedRating = Number(Math.floor(rating));

    return (
        <div className="flex items-center gap-2">
            <span className="text-style__body2--bold text-YellowLight">{rating}{Number.isInteger(rating) && '.0'}</span>
            <div>
                <ul className="flex gap-1">
                    {Array(roundedRating).fill('').map((_, idx) => <li key={idx} className="text-Yellow">{<BsStarFill size={16}/>}</li>)}
                    {Number.isInteger(rating) === false && <li className="text-Yellow">{<BsStarHalf size={16}/>}</li>}
                </ul>
            </div>
        </div>
    );
};