import styles from './Reviews.module.scss'
import React from 'react'
import Review from './Review/Review'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {reviewInfo} from '../../infoData/reviewsData'

const responsive = {
    // superLargeDesktop: {
    //     breakpoint: { max: 4000, min: 3000 },
    //     items:1
    // },
    // desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 1
    // },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    // tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 1
    // },
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    // }
}

const {reviewsBlock, title} = styles

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
                        <Review key={id} name={name} position={position} reviewText={reviewText} stars={stars}/>)}
            </Carousel>

        </div>
    )
}

export default Reviews
