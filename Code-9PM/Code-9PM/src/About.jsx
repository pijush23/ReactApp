// import React from 'react'
// export default function About() {
//     return (
//         <div>
//             <h1>About Us</h1>
//         </div>
//     )
// }



// import React from 'react'
// import {useParams} from 'react-router-dom'
// export default function About() {
//     const param = useParams();
//     //console.log(param);
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Id :  {param.id}</h2>
//         </div>
//     )
// }
 



// import React from 'react'
// import {useParams} from 'react-router-dom'
// export default function About() {
//     const param = useParams();
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Id :  {param.id}</h2>
//             <h2>Name :  {param.name}</h2>
//         </div>
//     )
// }
 


// import React from 'react'
// import {useParams} from 'react-router-dom'
// export default function About() {
//     const param = useParams();
//     console.log(param.id1);
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Id :  {param.id1}</h2>
//             <h2>Name :  {param.name}</h2>
//         </div>
//     )
// }
 


import React from 'react'
import {useParams} from 'react-router-dom'
export default function About() {
    const {id,name} = useParams();
    return (
        <div>
            <h1>About Us</h1>
            <h2>Id :  {id}</h2>
            <h2>Name :  {name}</h2>
        </div>
    )
}