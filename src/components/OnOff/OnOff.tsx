import React, {FC, useState} from 'react';
import styles from './OnOff.module.css';

type OnOffPropsType = {
    on: boolean
}
const OnOff: FC<OnOffPropsType> = ({on}) => {
    const [status, setStatus] = useState<boolean>(false);
    const tumblerStyle = status ? styles.tumbler : `${styles.tumbler} ${styles.active}`;
    const lampStyle = status ? `${styles.lamp} ${styles.active}` : styles.lamp;
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

            <div className={lampStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" strokeWidth={4} height={50}
                     width={50}>
                    <path className={styles.lamp_round} stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit={1.5}
                          d="M61.5601 35.2119C54.3151 20.71 29.9047 23.9012 26.418 39.8324C24.3143 49.4454 33.1851 56.1728 34.3309 65.175H54.6669C55.2648 62.7679 56.4815 59.905 57.324 58.1455C59.075 54.4898 61.5517 52.1004 62.4921 48.0221C63.3867 44.1415 63.2831 38.6613 61.5601 35.2119Z"/>
                    <path fill="silver" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5}
                          d="M33.9577 77.4432C33.9519 74.6654 33.8156 71.8877 33.8638 69.1107C33.8829 68.0111 33.6951 66.6661 34.6468 65.8972C36.0365 64.7751 38.1037 64.6117 39.8283 64.5701C43.0608 64.4928 46.3182 64.52 49.5539 64.5267C51.0276 64.5292 53.2269 64.2733 54.5551 65.0056C55.8193 65.7013 56.1393 67.5977 56.2815 68.8786C56.5541 71.333 57.2797 76.8138 55.1959 78.7139C53.8835 79.9108 51.8363 80.1612 50.1557 80.3681C45.6973 80.9167 33.9644 80.8078 33.9577 77.4432Z"
                          clipRule="evenodd"/>
                    <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5}
                          d="M45.8401 80.6061C45.8765 82.1179 45.8943 83.6375 45.7754 85.1468"/>
                    <path className={styles.lamp_lines} stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit={1.5}
                          d="M10.5814 57.5254C12.1676 56.6882 13.8241 55.9995 15.4273 55.1987"/>
                    <path className={styles.lamp_lines} stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit={1.5}
                          d="M10.5814 24.9904C12.352 26.1147 14.0458 27.3573 15.8204 28.4719"/>
                    <path className={styles.lamp_lines} stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit={1.5}
                          d="M45.53 11.6636C45.4677 9.4368 45.4815 7.22597 45.5527 5"/>
                    <path className={styles.lamp_lines} stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit={1.5}
                          d="M72.9399 26.8321C75.1627 25.3608 77.4517 23.9785 79.7125 22.5662"/>
                    <path className={styles.lamp_lines} stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit={1.5}
                          d="M69.0616 57.1753C70.7756 58.7114 72.4969 60.2296 74.1558 61.8255"/>
                </svg>
            </div>
        </div>
    );
};

export default OnOff;