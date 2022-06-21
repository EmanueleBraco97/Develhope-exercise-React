import { useMemo } from 'react';

export function FilteredList({ playersMaggiorenni }) {

  function filterAge(arrayFiltrato) {
    console.log(arrayFiltrato)
    return arrayFiltrato.filter(element => element.age > 18); //filtriamo l'array di oggetti per valutare chi ha età maggiore di 18//
  }

  const arrayMemoFiltrato = useMemo(() => filterAge(playersMaggiorenni), [playersMaggiorenni]); //funzione restituirà un valore, che a sua volta verrà memorizzato con useMEMO//
  console.log(arrayMemoFiltrato)

  return (
    <div>
      {arrayMemoFiltrato.map((element, index) => (
        <ul key={index}>
          <li>NAME is: {element.name}</li>
          <li>ID is: {element.id}</li>
          <li>AGE è: {element.age}</li>
        </ul>
      ))}
    </div>
  );
}

