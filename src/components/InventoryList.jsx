// import React from 'react';

// const InventoryList = ({ items, onDelete, onEdit }) => {
//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <span>{item.name} - {item.quantity} - ${item.price} - {item.category}</span>
//             <button onClick={() => onEdit(item)}>Edit</button>
//             <button onClick={() => onDelete(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InventoryList;

import React from 'react';

const InventoryList = ({ items, onDelete, onEdit }) => {
  return (
    <div>
      <div className="inventory-header">
        <span>Item Name</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Category</span>
        <span>Actions</span>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>{item.category}</span>
            <div className="action-buttons">
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
