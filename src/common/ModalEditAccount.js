// import { useState } from "react";
// import React from 'react';
//
// const editData = [
//     { id: 1, title: "Edit" },
// ];
//
// function ModalEditAccount({ onCancelEdit }) {
//     const [btnId, setBtnId] = useState(1);
//
//     const onBtnClick = (id) => {
//         setBtnId(id);
//     }
//
//     return (
//   <div className="modal-edit-account-container">
//       <div className="modal-edit-account">
//           <div className="modal__content">
//               <div className="btn-container2">
//                   {editData.map((btn ) => (
//                       <button
//                       key={btn.id}
//                       onClick={() => onBtnClick(btn.id)}
//                       style={{
//                           border: btn.id === btnId ? "3px solid #AE865E" : "none"
//                       }}
//                       >
//                           {btn.title}
//                       </button>
//                   ))}
//               </div>
//               {btnId === 1 && (
//                   <ModalEditAccount
//                       onCancelEdit={onCloseModelEditAcount}
//                       />
//               )}
//           </div>
//       </div>
//   </div>
//     );
// }
//
// export default ModalEditAccount;