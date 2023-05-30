import { useEffect } from 'react';

export const CicloDeVida = () => {
  // useEffect(()=>{}, [])

  useEffect(() => {
    console.log('Solo se ejecuta 1 vez en la etapa de MONTAJE');
  }, []);

  useEffect(() => {
    console.log('Solo se ejecuta cada vez en la etapa de ACTUALIZACIÓN');
  });

  useEffect(() => {
    return console.log('Solo se ejecuta 1 vez en la etapa de DESMONTAJE');
  });

  return <div>Ciclo De Vida</div>;
};
