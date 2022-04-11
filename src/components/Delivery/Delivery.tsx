// Functional
import React from 'react'
// Global component
import {Button, Input} from "../index";

// fixme
interface inputTarget {
    target: HTMLInputElement
}

const inputType = {
    type: 'text',
    onFocus: ({target} : inputTarget):void => {
        target.type = "date"
    },
    onBlur: ({target} : inputTarget):void => {
        target.type = "text"
    }
}

const Delivery: React.VFC = () => {

    return(
        <div className="delivery">
            <div className="delivery__container">
                <div className="delivery__information">
                    <p>Когда доставить?</p>
                    <div className="delivery__information-where">
                        <Input
                            placeholder="Выберите дату"
                            {...inputType}
                        />
                        <Input
                            placeholder="Выберите время"
                            {...inputType}
                        />
                    </div>
                    <p>Куда доставить?</p>
                    <Input
                        placeholder="Выберите адрес доставки"
                    />
                    <p>Имя</p>
                    <Input
                        placeholder="Выберите адрес доставки"
                    />
                    <p>Телефон</p>
                    <Input
                        type="phone"
                        placeholder="Выберите адрес доставки"
                    />
                </div>
                <div className="delivery__price">
                    <div className="delivery__price-info">
                        <div className="delivery__price-item">
                            <p>Стоимость товаров:</p>
                            <p>200 584₽</p>
                        </div>
                        <div className="delivery__price-item">
                            <p>Стоимость доставки:</p>
                            <p>200 584₽</p>
                        </div>
                        <div className="delivery__price-item">
                            <p>Итого:</p>
                            <p>200 584₽</p>
                        </div>
                    </div>
                    <Button onClick={() => alert('!')}>
                        Сделать заказ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Delivery