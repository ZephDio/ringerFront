// import { Signal } from '@preact/signals';
// import { useEffect, useState } from 'react';

// export const useSignal = <T extends unknown>(signal: Signal<T>): T => {
//   const [signalValue, setSignalValue] = useState<T>(signal.peek());

//   useEffect(() => {
//     const handleSignalChange = (value: T) => {
//       setSignalValue(value);
//     };

//     const unsubscribe = signal.subscribe(handleSignalChange);

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return signalValue;
// };