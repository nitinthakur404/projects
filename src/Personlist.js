import React from 'react'
import Passdataprops from './Passdataprops'
function Personlist() {
    let details = [
        {
            id: 1,
            name: 'nitin',
            age: 23,
            skill: "reactJS"
        },
        {
            id: 2,
            name: 'manish',
            age: 21,
            skill: "Angular js"
        },

        {
            id: 3,
            name: 'golu',
            age: 24,
            skill: "Electrical Mechnical"
        },
        {
            id: 4,
            name: 'vicky ',
            age: 22,
            skill: "reactJS"
        },

    ]
    return (
        <div>

            {details.map(detail => <Passdataprops data={detail} />)}

        </div>
    )
}


export default Personlist
