import { HWrapper, Logo, NavButton } from "../components/Header/Header"
import GenericButton from '../components/GenericButton/GenericButton'
import meninaRandom from '../assets/imgs/meninaRandom.svg'
import chapeuGraduacao from '../assets/imgs/chapeuGraduacao.svg'
import BigButton from '../components/BigButton/BigButton'

/* ESSA É A HOME DA ESCOLA */

function Home() {
  return (
    <>
      <HWrapper>
        <Logo />
        <NavButton
          buttons={[
            {
              textColor: 'var(--cor03)',
              textContent: 'Home',
            },
            {
              bgColor: 'var(--cor02)',
              textContent: 'Sua conta',
              icon: 'arrow_right_alt',
            },
          ]}
        />
      </HWrapper>
      <main>
        <div
          style={
            {
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              minHeight: '40vh',
              margin: '2rem'
            }
          }
        >
          <div
            style={
              {
                flex: '0 1 39%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '4rem',
                fontSize: '1.1em'
              }
            }
          >
            <h1>A interação entre responsáveis e escola nunca ficou tão fácil!</h1>
            <p>Todos os dias aproximando pais e responsáveis para a educação.</p>
            <GenericButton
              bgColor="var(--cor02)"
              textColor="white"
              textContent="Sua conta"
            />
          </div>
          <img
            src={meninaRandom}
            alt=""
            style={
              {
                flex: '0 1 39%',
                height: '46vh'
              }
            }
          />
        </div>
        <nav
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <BigButton
            icon={chapeuGraduacao}
            textContent="Eventos escolares"
            description="Veja e adicione eventos da sua escola"
          />
          <BigButton
            icon={chapeuGraduacao}
            textContent="Ocorrências"
            description="Veja e adicione ocorrências"
          />
          <BigButton
            icon={chapeuGraduacao}
            textContent="Chat"
            description="Converse diretamente com os responsáveis dos alunos"
          />
          <BigButton
            icon={chapeuGraduacao}
            textContent="Vínculo - Aluno e responsável"
            description="Cadastre o aluno ao seu responsável"
          />
        </nav>
      </main>
    </>
  )
}

export default Home