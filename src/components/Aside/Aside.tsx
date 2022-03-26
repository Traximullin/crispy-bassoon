import React from 'react'
import AsideItems from "./AsideItem/AsideItems";

const Aside: React.FC = () => {

    return(
        <aside className="aside">
            <div className="aside__list">
                <AsideItems/>
                <AsideItems/>
                <AsideItems/>
            </div>
        </aside>
    )

}

export default Aside