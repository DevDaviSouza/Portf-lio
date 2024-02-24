import './App.css';
import React from 'react'
import perfil from './assets/images/perfil.png'

export default function App() {
  
  return (
    <body className='page'>
      <section className='page-presentation'>
        <img className='image' src={perfil} alt='' />
        
        <div id='presentation'>
            <p className='presentationText'>
            Olá, me chamo Davi e sou um DEV júnior <span className='hightexts'> fullstack. </span> Atualmente estou me especializando em <span className='hightexts'>programação web </span>com <span className='hightexts'>react</span>.
            </p>
            
            <p className='presentationText'>
            Busco minha primeira oportunidade no mercado de programação, onde quero seguir minha carreira.
            </p>

            <p className='presentationText'>
            As tecnologias que utilizo são:
            </p>
            
            <div className='technologies'>
                <img className='technology' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='react' />
              
                <img className='technology' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                
                <img className='technology' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
              
                <img className='technology' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  
               <img className='technology' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
           
              <img className='technology' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
          
            </div>
        </div>
      </section>   
    </body>
  );
}
