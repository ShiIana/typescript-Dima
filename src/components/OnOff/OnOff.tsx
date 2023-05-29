import React, {FC, useState} from 'react';
import styles from './OnOff.module.css';
import OnOffIcon from "./OnOffIcon";

type OnOffPropsType = {
    on: boolean
}
const OnOff: FC<OnOffPropsType> = ({on}) => {
    const [status, setStatus] = useState<boolean>(false);
    const tumblerStyle = status ? styles.tumbler : `${styles.tumbler} ${styles.active}`;
    const OnStatus = () => {
        setStatus(true);
    }

    const OffStatus = () => {
        setStatus(false);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.checker}>
                <span onClick={OnStatus}>On</span>
                <span onClick={OffStatus}>Off</span>
                <div className={tumblerStyle}></div>
            </div>

            <OnOffIcon status={status}/>
        </div>
    );
};

export default OnOff;