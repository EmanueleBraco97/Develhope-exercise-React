import { useEffect, useRef } from "react";

export function CarDetails({initialData}) {
  const elementRef = useRef();

  useEffect(() => {
    elementRef.current.reset();
  }, [initialData]);

  return (
    <form ref={elementRef}>
      <input name='model' ref={elementRef} defaultValue={initialData.model}></input>
      <input name='year' ref={elementRef} defaultValue={initialData.year}></input>
      <input name='color' ref={elementRef} defaultValue={initialData.color}></input>
    </form>
  );
}
