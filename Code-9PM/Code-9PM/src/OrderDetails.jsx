// import React from 'react'
// import { useParams } from 'react-router-dom'
// export default function OrderDetails() {
//   const { id } = useParams();
//   return (
//     <div>
//       <h1>Order Details</h1>
//       <h2>Order Id : {id}</h2>
//     </div>
//   )
// }




import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToBack = (e) => {
    e.preventDefault();
    //navigate(-1);
    navigate("/order");
  }
  const goToHome = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div>
      <a className='btn btn-primary me-2' onClick={goToBack} >Back To Orders</a>
      <a className='btn btn-danger' onClick={goToHome} >Go To Home</a>
      <h1>Order Details</h1>
      <h2>Order Id : {id}</h2>
    </div>
  )
}
