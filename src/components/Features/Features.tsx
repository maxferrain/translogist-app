import styles from './Features.module.scss'

import FeatureCard from './FeatureCard/FeatureCard'
import {featuresData, IFeaturePropsType} from '../../infoData/featuresData'

const {questionsBlock, title} = styles
const Features = () => {
    return (
        <div className='container'>
            <div className={questionsBlock}>
                <h2 className={title}>Всю работу возьмем на себя</h2>

                <div>
                    {featuresData.map(({name, description, id, icon, styleClass}: IFeaturePropsType) =>
                        <FeatureCard key={id} name={name} description={description} icon={icon} styleClass={styleClass}/>)}
                </div>

            </div>
        </div>
    )
}

export default Features
