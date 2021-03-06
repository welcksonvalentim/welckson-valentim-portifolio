import Header from '../Components/Header';
import Footer from '../Components/Footer';
import softwares from '../images/softwares.JPG';
import frontEnd from '../images/frontEnd.JPG';
import backEnd from '../images/backEnd.JPG';

function Knowledge() {
  return (
    <main>
      <Header />
      <section className='knowleg'>
        <h1>Conhecimentos</h1>
        <section className='knowledge'>
          <section className='plat-knowledge'>
          <h3>Softwares</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>MySQL Workbench</li>
            </ul>
            <img alt='logo softwares' src={ softwares } />
          </section>
          <section className='plat-knowledge'>
          <h3>Tecnologias - Front-End</h3>
            <ul>
              <li>React</li>
              <li>React Testing library</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
            <img alt='logo frontEnd' src={ frontEnd } />
          </section>
          <section className='plat-knowledge'>
          <h3>Tecnologias - Back-End</h3>
            <ul>
              <li>Docker</li>
              <li>SQL</li>
              <li>Node.JS</li>
              <li>TypeScript</li>
            </ul>
            <img alt='logo backEnd' src={ backEnd } />
          </section>
          </section>
      </section>
      <Footer />
    </main>
  );
}
export default Knowledge;