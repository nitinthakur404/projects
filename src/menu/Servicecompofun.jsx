import React from 'react'
import Servicecompo from './Servicecompo'
import Runaways from '../img/Runaways.jpg'
import stranger from '../img/stranger.jpg'
import two from '../img/two.jpg'
import seven from '../img/seven.jpg'
import Ourservicedata from '../Ourservicedata'
function Servicecompofun() {
    return (
        <div>
            <Servicecompo
                img="../image/logo.jpg"
                title="Runaways"
            />
            <Servicecompo
                img={stranger}
                title="Stranger Things"
            />

            <Servicecompo
                img={two}
                title="Money Heist"
            />
            <Servicecompo
                img={seven}
                title="Agent Carter"
            />
        </div>
    )
}

export default Servicecompofun
