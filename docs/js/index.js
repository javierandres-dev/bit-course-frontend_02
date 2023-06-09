'use strict';
const $desarrolladores = document.getElementById('desarrolladores');

const paginaWeb = 'bit00me',
  sitioWeb = 'bit01website',
  spa = 'bit02spa',
  desarrolladores = [
    {
      id: 1,
      nombre: 'Luis Felipe Rodriguez Quinayas',
      repositorio: 'https://github.com/Rodluisfelipe/',
      paginaWeb: `https://Rodluisfelipe.github.io/${paginaWeb}`,
      entregable1: `https://Rodluisfelipe.github.io/${sitioWeb}`,
      entregable2: `https://Rodluisfelipe.github.io/${spa}`,
      activo: true,
    },
    {
      id: 2,
      nombre: 'Marlon Antonio Gualteros Porras',
      repositorio: 'https://github.com/magualteros/',
      paginaWeb: `https://magualteros.github.io/${paginaWeb}`,
      entregable1: `https://magualteros.github.io/${sitioWeb}`,
      entregable2: `https://magualteros.github.io/${spa}`,
      activo: true,
    },
    {
      id: 3,
      nombre: 'Daniel Fernando Valencia Rojas',
      repositorio: 'https://github.com/DanielFValenciaR/',
      paginaWeb: `https://DanielFValenciaR.github.io/${paginaWeb}`,
      entregable1: `https://DanielFValenciaR.github.io/${sitioWeb}`,
      entregable2: `https://DanielFValenciaR.github.io/${spa}`,
      activo: true,
    },
    {
      id: 4,
      nombre: 'Janner Melissa Bonilla Garcia',
      repositorio: 'https://github.com/MeliiG/',
      paginaWeb: `https://MeliiG.github.io/${paginaWeb}`,
      entregable1: `https://MeliiG.github.io/${sitioWeb}`,
      entregable2: `https://MeliiG.github.io/${spa}`,
      activo: true,
    },
    {
      id: 5,
      nombre: 'Maria Fernanda Rosado Mosquera',
      repositorio: 'https://github.com/fernandalunares/',
      paginaWeb: `https://fernandalunares.github.io/${paginaWeb}`,
      entregable1: `https://fernandalunares.github.io/${sitioWeb}`,
      entregable2: `https://fernandalunares.github.io/${spa}`,
      activo: true,
    },
    {
      id: 6,
      nombre: 'Melisa Manios Cuellar',
      repositorio: 'https://github.com/MelisaManiosCuellar/',
      paginaWeb: `https://MelisaManiosCuellar.github.io/${paginaWeb}`,
      entregable1: `https://MelisaManiosCuellar.github.io/${sitioWeb}`,
      entregable2: `https://MelisaManiosCuellar.github.io/${spa}`,
      activo: true,
    },
    {
      id: 7,
      nombre: 'Óscar Giovanny Garzon leon',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: false,
    },
    {
      id: 8,
      nombre: 'Leonardo De Jesus Zuluaga Coba',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: true,
    },
    {
      id: 9,
      nombre: 'José Nicolas Soler Chavarro',
      repositorio: 'https://github.com/jnsoler12012/',
      paginaWeb: `https://jnsoler12012.github.io/${paginaWeb}`,
      entregable1: `https://jnsoler12012.github.io/${sitioWeb}`,
      entregable2: `https://jnsoler12012.github.io/${spa}`,
      activo: true,
    },
    {
      id: 10,
      nombre: 'Wilson Daniel Machado Toro',
      repositorio: 'https://github.com/WilsonMachado/',
      paginaWeb: `https://WilsonMachado.github.io/${paginaWeb}`,
      entregable1: `https://WilsonMachado.github.io/${sitioWeb}`,
      entregable2: `https://WilsonMachado.github.io/${spa}`,
      activo: true,
    },
    {
      id: 11,
      nombre: 'Diego Andrés Valbuena Vanegas',
      repositorio: 'https://github.com/diego379/',
      paginaWeb: `https://diego379.github.io/${paginaWeb}`,
      entregable1: `https://diego379.github.io/${sitioWeb}`,
      entregable2: `https://diego379.github.io/${spa}`,
      activo: false,
    },
    {
      id: 12,
      nombre: 'Fabian David Sanchez Deantonio',
      repositorio: 'https://github.com/FabianSan21/',
      paginaWeb: `https://FabianSan21.github.io/${paginaWeb}`,
      entregable1: `https://FabianSan21.github.io/${sitioWeb}`,
      entregable2: `https://FabianSan21.github.io/${spa}`,
      activo: false,
    },
    {
      id: 13,
      nombre: 'Briggith Nataly Rodríguez Alfaro',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: false,
    },
    {
      id: 14,
      nombre: 'Franyerson Enrique Contreras Ramirez',
      repositorio: 'https://github.com/EnriqueContramirez/',
      paginaWeb: `https://EnriqueContramirez.github.io/${paginaWeb}`,
      entregable1: `https://EnriqueContramirez.github.io/${sitioWeb}`,
      entregable2: `https://EnriqueContramirez.github.io/${spa}`,
      activo: true,
    },
    {
      id: 15,
      nombre: 'Diego Nicolas Bravo Arias',
      repositorio: 'https://github.com/dnbravo04/',
      paginaWeb: `https://dnbravo04.github.io/${paginaWeb}`,
      entregable1: `https://dnbravo04.github.io/${sitioWeb}`,
      entregable2: `https://dnbravo04.github.io/${spa}`,
      activo: true,
    },
    {
      id: 16,
      nombre: 'Evelyn Vanessa Bernal Pérez',
      repositorio: 'https://github.com/Evy32/',
      paginaWeb: `https://Evy32.github.io/${paginaWeb}`,
      entregable1: `https://Evy32.github.io/${sitioWeb}`,
      entregable2: `https://Evy32.github.io/${spa}`,
      activo: true,
    },
    {
      id: 17,
      nombre: 'Juan Camilo Sánchez Echeverri',
      repositorio: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/',
      paginaWeb: `https://Juan-Camilo-Sanchez-Echeverri.github.io/${paginaWeb}`,
      entregable1: `https://Juan-Camilo-Sanchez-Echeverri.github.io/${sitioWeb}`,
      entregable2: `https://Juan-Camilo-Sanchez-Echeverri.github.io/${spa}`,
      activo: true,
    },
    {
      id: 18,
      nombre: 'Laura Valentina García Álvarez',
      repositorio: 'https://github.com/LauraVaGarciaA/',
      paginaWeb: `https://LauraVaGarciaA.github.io/${paginaWeb}`,
      entregable1: `https://LauraVaGarciaA.github.io/${sitioWeb}`,
      entregable2: `https://LauraVaGarciaA.github.io/${spa}`,
      activo: true,
    },
    {
      id: 19,
      nombre: 'Camilo Santana',
      repositorio: 'https://github.com/Caslx/',
      paginaWeb: `https://Caslx.github.io/${paginaWeb}`,
      entregable1: `https://Caslx.github.io/${sitioWeb}`,
      entregable2: `https://Caslx.github.io/${spa}`,
      activo: true,
    },
    {
      id: 20,
      nombre: 'Danny Alejandro Martínez Duque',
      repositorio: 'https://github.com/alejo02336/',
      paginaWeb: `https://alejo02336.github.io/${paginaWeb}`,
      entregable1: `https://alejo02336.github.io/${sitioWeb}`,
      entregable2: `https://alejo02336.github.io/${spa}`,
      activo: true,
    },
    {
      id: 21,
      nombre: 'Estiben Fernandez Echeverri',
      repositorio: 'https://github.com/estiben-614/',
      paginaWeb: `https://estiben-614.github.io/${paginaWeb}`,
      entregable1: `https://estiben-614.github.io/${sitioWeb}`,
      entregable2: `https://estiben-614.github.io/${spa}`,
      activo: true,
    },
    {
      id: 22,
      nombre: 'Kristian Mosquera Serna',
      repositorio: 'https://github.com/kristiancode/',
      paginaWeb: `https://kristiancode.github.io/${paginaWeb}`,
      entregable1: `https://kristiancode.github.io/${sitioWeb}`,
      entregable2: `https://kristiancode.github.io/${spa}`,
      activo: false,
    },
    {
      id: 23,
      nombre: 'Andres Felipe Aponte Torres',
      repositorio: 'https://github.com/FelipeAponte/',
      paginaWeb: `https://FelipeAponte.github.io/${paginaWeb}`,
      entregable1: `https://FelipeAponte.github.io/${sitioWeb}`,
      entregable2: `https://FelipeAponte.github.io/${spa}`,
      activo: true,
    },
    {
      id: 24,
      nombre: 'Esteban Camacho Salgado',
      repositorio: 'https://github.com/Xtebandido/',
      paginaWeb: `https://Xtebandido.github.io/${paginaWeb}`,
      entregable1: `https://Xtebandido.github.io/${sitioWeb}`,
      entregable2: `https://Xtebandido.github.io/${spa}`,
      activo: true,
    },
    {
      id: 25,
      nombre: 'Sara Acuña Benavides',
      repositorio: 'https://github.com/Acuna21/',
      paginaWeb: `https://Acuna21.github.io/${paginaWeb}`,
      entregable1: `https://Acuna21.github.io/${sitioWeb}`,
      entregable2: `https://Acuna21.github.io/${spa}`,
      activo: true,
    },
    {
      id: 26,
      nombre: 'Andrés Felipe Díaz Sanabria',
      repositorio: 'https://github.com/Amii2/',
      paginaWeb: `https://Amii2.github.io/${paginaWeb}`,
      entregable1: `https://Amii2.github.io/${sitioWeb}`,
      entregable2: `https://Amii2.github.io/${spa}`,
      activo: true,
    },
    {
      id: 27,
      nombre: 'Angie Fernanda Espinosa Valle',
      repositorio: 'https://github.com/AngieEspinosa78/',
      paginaWeb: `https://AngieEspinosa78.github.io/${paginaWeb}`,
      entregable1: `https://AngieEspinosa78.github.io/${sitioWeb}`,
      entregable2: `https://AngieEspinosa78.github.io/${spa}`,
      activo: true,
    },
    {
      id: 28,
      nombre: 'Eduardo Cadavid Garcia',
      repositorio: 'https://github.com/ECG301997/',
      paginaWeb: `https://ECG301997.github.io/${paginaWeb}`,
      entregable1: `https://ECG301997.github.io/${sitioWeb}`,
      entregable2: `https://ECG301997.github.io/${spa}`,
      activo: true,
    },
    {
      id: 29,
      nombre: 'Neis Edith Rosado Mosquera',
      repositorio: 'https://github.com/NeisRosado/',
      paginaWeb: `https://NeisRosado.github.io/${paginaWeb}`,
      entregable1: `https://NeisRosado.github.io/${sitioWeb}`,
      entregable2: `https://NeisRosado.github.io/${spa}`,
      activo: true,
    },
    {
      id: 30,
      nombre: 'Isabela Mejia Salazar',
      repositorio: 'https://github.com/isamejias/',
      paginaWeb: `https://isamejias.github.io/${paginaWeb}`,
      entregable1: `https://isamejias.github.io/${sitioWeb}`,
      entregable2: `https://isamejias.github.io/${spa}`,
      activo: true,
    },
    {
      id: 31,
      nombre: 'Natalia Diaz Moreno',
      repositorio: 'https://github.com/NataliaDiazm/',
      paginaWeb: `https://NataliaDiazm.github.io/${paginaWeb}`,
      entregable1: `https://NataliaDiazm.github.io/${sitioWeb}`,
      entregable2: `https://NataliaDiazm.github.io/${spa}`,
      activo: true,
    },
    {
      id: 32,
      nombre: 'Leidy Laura Michelle Suesca',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: true,
    },
    {
      id: 33,
      nombre: 'Kevin Alejandro Dosman Herrera',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: false,
    },
    {
      id: 34,
      nombre: 'Zuly Yohady Rodriguez Mosquera',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: true,
    },
    {
      id: 35,
      nombre: 'Sara Alejandra Tintin Cuervo',
      repositorio: null,
      paginaWeb: null,
      entregable1: null,
      entregable2: null,
      activo: true,
    },
  ];

(() => {
  let html = '';
  for (const desarrollador of desarrolladores) {
    if (desarrollador.activo) {
      const repoExists = !!desarrollador.repositorio;
      if (repoExists) {
        html += `<li class="activo">${desarrollador.nombre}: <a href="${desarrollador.repositorio}" target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="${desarrollador.paginaWeb}" target="_blank" rel="noopener noreferrer">Página</a> / <a href="${desarrollador.entregable1}" target="_blank" rel="noopener noreferrer">Sitio web</a> / <a href="${desarrollador.entregable2}" target="_blank" rel="noopener noreferrer">SPA</a></li>`;
      } else {
        html += `<li class="falta-repo">${desarrollador.nombre}: <span class="error">Falta repositorio</span>.</li>`;
      }
    } else {
      html += `<li class="inactivo">${desarrollador.nombre}</li>`;
    }
  }
  $desarrolladores.innerHTML = html;
})();
