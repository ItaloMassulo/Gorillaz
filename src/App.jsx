import {useState} from 'react';
import './app.scss';
import murdoc from './assets/murdoc.png';
import dd from './assets/2d.png';
import noodle from './assets/noodle.png';
import russel from './assets/russel.png';


export default function App() {
const [membros, setMembros] = useState(0);
const Gorillaz = [
  {
    imagem:dd,
    nome: 'Stuart Harold Tusspot',
    apelido: '2D',
    idade: 46,
    posição: 'Vocalista',
  },
  {
    imagem: murdoc,
    nome: 'Murdoc Alphonce Niccals',
    apelido: 'Murdoc',
    idade: 58,
    posição: 'Baixista',
  },
  {
    imagem: noodle,
    nome: 'Noodle',
    apelido: 'Noodle',
    idade: 34,
    posição: 'Guitarrista',
  },
  {
    imagem: russel,
    nome: 'Russel Hobbs',
    apelido: 'Russel',
    idade: 49,
    posição: 'Baterista',
  }
]

const proximoMembro = () => {
  setMembros((prevMembro) => (prevMembro + 1) % Gorillaz.length);
}

  return (
    <div className='container'>
      <h1>Gorillaz!</h1>
      <div className='dados'>
        <img src={Gorillaz[membros].imagem} alt={Gorillaz[membros].nome} />
        <h2>{Gorillaz[membros].nome}</h2>
        <p>Apelido: {Gorillaz[membros].apelido}</p>
        <p>Idade: {Gorillaz[membros].idade}</p>
        <p>Posição: {Gorillaz[membros].posição}</p>
        <button onClick={proximoMembro}>Próximo Membro</button>
      </div>
    </div>
    
  )
}