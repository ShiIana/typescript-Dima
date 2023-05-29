import styles from "./Rating.module.css";
import {FC} from "react";
import {ratingValueType, Title} from "../../App";

type RatingPropsType = {
    rating: ratingValueType
    title: string
    setRating: (value: ratingValueType) => void
}
export const Rating: FC<RatingPropsType> = ({title, rating = 0, setRating}) => {
    return (
        <>
            <Title title={title}/>
            <div className={styles.stars_list}>
                <Star value={1} setRating={setRating} selected={rating > 0} ></Star>
                <Star value={2} setRating={setRating} selected={rating > 1} ></Star>
                <Star value={3} setRating={setRating} selected={rating > 2} ></Star>
                <Star value={4} setRating={setRating} selected={rating > 3} ></Star>
                <Star value={5} setRating={setRating} selected={rating > 4} ></Star>
            </div>
        </>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: (value: ratingValueType) => void
    value: ratingValueType
}

const Star: FC<StarPropsType> = ({selected, setRating, value}) => {
    const onChangeRatingHandler = () => {
        setRating(value);
    }

    return (
        <span onClick={onChangeRatingHandler} className={selected? `${styles.star} ${styles.active}` : styles.star}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" strokeWidth={4} height={40}
                 width={40}>
                <linearGradient id="active" x1={25} x2={15} y1={63} y2={30}
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8EC5FC"/>
                    <stop offset={1} stopColor="#E0C3FC"/>
                </linearGradient>
                <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5}
                      d="M66.8564 56.8722C68.5029 62.4593 71.9147 69.9961 70.4696 75.7554C68.1617 84.9498 56.5677 79.2155 52.0865 75.8602C50.8977 74.9695 49.717 74.0636 48.5795 73.107C47.2259 71.9695 45.8907 70.8057 44.6023 69.5943C40.9056 74.0131 35.662 78.8626 30.1715 80.8307C25.571 82.4794 21.7425 80.4562 20.8884 75.559C19.8681 69.7119 21.5403 63.0401 23.0294 57.4112C18.5826 53.1842 13.9667 48.8972 10.6692 43.7209C7.49991 38.7447 9.86937 34.0848 15.4426 32.8089C17.243 32.3965 19.0873 32.1923 20.9309 32.1029C23.4117 31.9833 29.3742 32.1784 30.8937 32.1784C31.0614 32.0817 31.4196 30.6056 31.509 30.3544C32.1177 28.6478 32.7564 26.9641 33.4661 25.2963C34.0023 24.0379 34.5486 22.783 35.1089 21.5356C37.1027 17.0963 41.5325 5.14836 48.2015 9.69982C48.879 10.1627 49.4489 10.7451 49.9668 11.3772C50.8215 12.4216 51.4924 13.6545 52.1084 14.8513C53.265 17.0985 54.1696 19.4613 55.0881 21.811C56.4607 25.3202 57.6114 28.9495 59.132 32.4001C59.151 32.4426 59.1649 32.4874 59.1766 32.5328C61.4369 32.5885 63.7039 32.6271 65.9628 32.7399C70.8907 32.9853 78.5962 31.7027 80.7584 36.616C81.9281 39.2726 80.6338 42.0839 79.0466 44.2388C75.8216 48.6152 71.4599 51.9925 67.2314 55.3354"/>
            </svg>
        </span>
    )
}