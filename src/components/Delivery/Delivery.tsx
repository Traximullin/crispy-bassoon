// Functional
import React from 'react'
// Global component
import {Button, Input} from "../index";

const Delivery: React.VFC = () => {

    return(
        <div className="delivery">
            <div className="delivery__container">
                <div className="delivery__information">
                    <p>Когда доставить?</p>
                    <div>
                        <Input
                            type="date"
                            placeholder="Выберите дату"
                        />
                        <Input
                            type="date"
                            placeholder="Выберите время"
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
                    <Button onClick={() => alert('!')}>
                        Сделать заказ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Delivery