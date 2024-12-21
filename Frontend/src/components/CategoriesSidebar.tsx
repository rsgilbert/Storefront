import React, { useState } from 'react'
import './CategoriesSidebar.css'
import expand from '../icons/expand.svg'
import collapse from '../icons/collapse.svg'



// export const CategoriesSidebar = props => {
//     const [isExpanded, setIsExpanded] = useState(false)
//     const getArrow = () => {
//         return isExpanded ? collapse : expand
//     }

//     const toggleExpanded = () => setIsExpanded(!isExpanded)

//     return (
//         <div className="categories-sidebar">
//             <div className="categories-container"> 
//                 {/* <div className="categories-header"> */}
//                     <h1>Categories</h1>
//                 {/* </div> */}
//                 <h2>Dresses</h2>
//                 <h2>Phone covers</h2>
//             </div>
//         </div>
//     )
// }