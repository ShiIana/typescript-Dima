import styles from "./UncontrolledAccordion.module.css";
import {Title} from "../../App";
import {FC, useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean
    showAccordionBody: () => void
}

type AccordionBodyPropsType = {
}

const UncontrolledAccordion: FC<UncontrolledAccordionPropsType> = ({title}) => {
    const [collapsed, setCollapsed] = useState(true);

    const showAccordionBody = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <AccordionTitle title={title} showAccordionBody={showAccordionBody} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle: FC<AccordionTitlePropsType> = ({title, showAccordionBody, collapsed}) => {
    const iconClass = collapsed ? styles.acc_icon : `${styles.acc_icon} ${styles.active}`

    return (
        <div className={styles.acc_title} onClick={showAccordionBody}>
            <Title title={title}/>
            <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" strokeWidth={10} height={25}
                 width={25}>
                <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5}
                      d="M15.4643 17.5654C35.1114 37.2059 55.9994 55.7033 74.7329 76.2544"/>
                <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5}
                      d="M15.4643 76.9338C31.9678 52.7928 52.4879 32.3909 73.7907 13.1168"/>
            </svg>
        </div>
    )
}

const AccordionBody: FC<AccordionBodyPropsType> = () => {
    return (
        <ul>
            <li className={styles.acc_item}>Menu Link</li>
            <li className={styles.acc_item}>Menu Link</li>
            <li className={styles.acc_item}>Menu Link</li>
            <li className={styles.acc_item}>Menu Link</li>
        </ul>
    )
}

export default UncontrolledAccordion;