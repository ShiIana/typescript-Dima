import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {FC, useState} from "react";
import OnOff from "./components/OnOff/OnOff";
import './App.css';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
    const [rating, setRating] = useState<ratingValueType>(2);
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onShowAccordion = () => setCollapsed(!collapsed);

    return (
        <>
            <div className="wrapper">
                <OnOff on={true}/>
            </div>

            <div className="wrapper">
                <Rating rating={rating} setRating={setRating} title={'Rating title'}/>
            </div>

            <div className="wrapper">
                <UncontrolledAccordion title={'Menu'} />
            </div>

            <div className="wrapper">
                <Accordion title={'Menu'} collapsed={collapsed} onShowAccordion={onShowAccordion}/>
            </div>
        </>
    );
}

type TitlePropsType = {
    title: string
}

export const Title: FC<TitlePropsType> = ({title}) => {
    return <h3>{title}</h3>
}



export default App;
