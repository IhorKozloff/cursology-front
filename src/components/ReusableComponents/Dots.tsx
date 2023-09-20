interface IProps {
    elements?: number;
    activeIdx?: number;
}

export const Dots = ({activeIdx = 0, elements = 3}: IProps) => {

    const dotsContentCreator = (idx:number, number:number) => {
        return Array(number).fill('').map((_, index) => index === idx 
            ? <li key={index} className="w-9 h-2 bg-Blue rounded cursor-pointer"></li> 
            : <li key={index} className="w-2 h-2 bg-Grey/10 rounded-full cursor-pointer"></li>);
    };

    return (
        <ul className="flex gap-3">
            {dotsContentCreator(activeIdx, elements)}
        </ul>
    );
};