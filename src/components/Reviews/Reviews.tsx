import styles from './Reviews.module.scss'
import React from 'react'
import Review from './Review/Review'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items:1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const {reviewsBlock, title} = styles

const reviewInfo = [
    {
        id: 0,
        name: 'А.В. Занько',
        position: 'Генеральный директор ООО "Компания СтальТД"',
        reviewText: 'За время работы ООО "Транслогистик" проявил себя как надёжный перевозчик с высоким уровнем сервиса. ' +
            'Огромным плюсом можно назвать профессиональный подход и гибкость в рабочих моментах',
        stars: 5
    },
    {
        id: 1,
        name: 'О.А. Воевода',
        position: 'Начальник отдела снабжения и логистики ООО "ТД "Биоинстал"',
        reviewText: 'Можем отметить бережное отношение к бухгалтерской и транспортной отчётности, что позволяет осуществлять отчетность в гарантированные сроки',
        stars: 4
    },
    {
        id: 2,
        name: 'С.А. Агуров',
        position: 'Генеральный директор ООО "Торговый Дом СЕТТЛ"',
        reviewText: 'Мы высоко ценим сложившиеся партнерские отношения, установившиеся между нашими организациями и можем рекомендовать ООО «ТрансЛогистик» как грамотного и надёжного партнёра',
        stars: 5
    },
    {
        id: 3,
        name: 'Тихонов Алексей',
        position: 'Зам. технического директора по снабжению ООО "РОПА Русь"',
        reviewText: 'Компания ООО РОПА Русь может рекомендовать  ООО "ТРАНСЛОГИСТИК" как надежного партнера, предоставляющего своим клиентам дополнительную возможность для развития бизнеса.',
        stars: 5
    },
    {
        id: 4,
        name: 'Г.М. Карнеев',
        position: 'Генеральный директор ООО «Угур»',
        reviewText: 'Оперативность, ответственный подход, строгое соответствие стандартам и требованиям заказчика - это визитная карточка компании ООО "Транслогистик" в области транспортной логистики.',
        stars: 4
    },
    {
        id: 5,
        name: 'С.Ю. Толкачев',
        position: 'Генеральный директор ЗАО "Бюрократ"',
        reviewText: 'За период сотрудничества "ТРАНСЛОГИСТИК" зарекомендовали себя как надежного и ответственного партнера, а профессионализм специалистов  "ТРАНСЛОГИСТИК" обеспечивает высокое качество предоставляемых услуг.',
        stars: 5
    },
    {
        id:6,
        name: 'Ю.Б. Ездаков',
        position: 'Генеральный директор ЗАО "Уралтермосвар"',
        reviewText: 'Несомненным плюсом является быстрое реагирование на запросы, предоставление качественных услуг по низким ценам. ООО «ТрансЛогистик» - надежный партнер',
        stars: 4
    }
]
const Reviews = () => {
    return (
        <div className={reviewsBlock}>
            <h2 className={title}>Отзывы клиентов</h2>

            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all 1s"
                // transitionDuration={5000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                centerMode={true}

                // deviceType={this.props.deviceType}
                // deviceType={'mobile'}

                // dotListClass="custom-dot-list-style"
                dotListClass={styles.dots}
                itemClass="carousel-item-padding-40-px"
            >

                {reviewInfo
                    .map(({id, name, position, reviewText, stars}) =>
                        <Review key={id}name={name} position={position} reviewText={reviewText} stars={stars}/>)}
            </Carousel>

        </div>
    )
}

export default Reviews
