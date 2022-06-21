import { CarDetails } from "./CarDetails";

export function App() {

  return (
    <div>
      <CarDetails initialData= {{model: 'fiat 500', year: 2018, color: 'blue'}}></CarDetails>
    </div>
  );
}

