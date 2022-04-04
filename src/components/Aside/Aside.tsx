// Functional
import React from 'react'
// Components
import AsideItems from "./AsideItem/AsideItems";
import AsideProposition from "./AsideProposition/AsideProposition";

const Aside: React.FC = () => {

    return(
        <aside className="aside">
            <div className="aside__list">
                <AsideProposition/>
                <AsideItems/>
                <AsideItems/>
                <AsideItems/>
                <AsideItems/>
            </div>
        </aside>
    )

}

export default Aside