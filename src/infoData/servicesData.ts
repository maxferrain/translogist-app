import world from '../assets/images/img.png'
import transport from '../assets/images/transport.png'
import city from '../assets/images/city.png'
export interface IServicePropsType {
    id?: number
    name: string
    description: string
    img: string
}
export const servicesData: Array<IServicePropsType> = [
    {
        id: 0,
        name: 'Доставка по всему миру',
        description: 'Азия, Северная Америка, Южная Америка, Европа, Африка, Австралия',
        img: world
    },
    {
        id: 1,
        name: 'Все виды транспорта',
        description: 'Авиационный, морской, железнодорожный (из Китая), автомобильный',
        img: transport
    },
    {
        id: 2,
        name: 'Постоянное сопровождение',
        description: 'Таможенное оформление, забор груза от грузоотправителя, доставка до грузополучателя',
        img: city
    },
]
