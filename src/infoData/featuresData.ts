import express from '../assets/icons/delivery.svg'
import manager from '../assets/icons/manager.svg'
import protect from '../assets/icons/protect.svg'
import boxes from '../assets/icons/boxes.svg'
import documents from '../assets/icons/documents.svg'
import tracking from '../assets/icons/tracking.svg'
import okved from '../assets/icons/okved.svg'
import packaging from '../assets/icons/package.svg'
export interface IFeaturePropsType {
    id?: number
    name: string
    description: string
    icon: string
    styleClass: string
}
export const featuresData: Array<IFeaturePropsType> = [
    {
        id: 0,
        name: 'Экспресс-перевозки',
        description: 'Возможность доставки груза за 1 день авиа транспортом',
        icon: express,
        styleClass: 'education'
    },
    {
        id: 1,
        name: 'Страхование грузов',
        description: 'Снижение рисков при транспортировке',
        icon: protect,
        styleClass: 'human-resources'
    },
    {
        id: 2,
        name: 'Сборные грузы',
        description: 'Консолидация грузов для снижения ставки',
        icon: boxes,
        styleClass: 'wallet'
    },
    {
        id: 3,
        name: 'Таможенное оформление',
        description: 'Обязательная процедура при международной перевозке',
        icon: documents,
        styleClass: 'credentialing'
    },
    {
        id: 4,
        name: 'Экспедирование в порту',
        description: 'Сопровождение грузов в порту отправления и прибытия',
        icon: tracking,
        styleClass: 'expedition'
    },
    {
        id: 5,
        name: 'Подбор кода ТНВЭД',
        description: 'Определение кода по описанию товара',
        icon: okved,
        styleClass: 'docs'
    },
    {
        id: 6,
        name: 'Упаковка грузов',
        description: 'Паллетирование, обрешетка, коробки, мешки, пленка',
        icon: packaging,
        styleClass: 'packaging'
    },
    {
        id: 7,
        name: 'Персональный менеджер',
        description: 'Специальный человек, который готов помочь в любую минуту',
        icon: manager,
        styleClass: 'manager'
    }

]
