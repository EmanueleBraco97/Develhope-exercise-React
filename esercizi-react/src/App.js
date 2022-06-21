import { FilteredList } from './FilteredList';

export function App() {
  const players = [
    { name: 'Messi', id: 1, age: 34 },
    { name: 'Gomes', id: 2, age: 16},
    { name: 'Ronaldo', id: 3, age: 37 },
    { name: 'Gavi', id: 4, age: 17 },
    { name: 'Cavani', id: 5, age: 35}
  ];

  return (
    <div>
      <FilteredList playersMaggiorenni={players}></FilteredList>
    </div>
  );
}
