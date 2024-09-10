// import React, { useMemo, useCallback } from 'react';

// const MEmo = ({ items }) => {
//   const computedValue = useMemo(() => {
//     // Expensive computation
//     return items.reduce((acc, item) => acc + item.value, 0);
//   }, [items]);

//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//   }, []);

//   return (
//     <div>
//       <p>Computed value: {computedValue}</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default MEmo;
