import GenericButton from '../../components/GenericButton/GenericButton'
import { HWrapper, Logo, NavButton } from '../../components/Header/Header'
import './Chat.css'

function Chat() {
  return (
    <>
      <HWrapper>
        <NavButton
          buttons={[
            {
              bgColor: 'var(--cor02)',
              textContent: 'Voltar',
              icon: 'arrow_left_alt',
              iconPosition: 'left'
            },
            {
              bgColor: 'var(--cor02)',
              textContent: 'Sua conta',
              icon: 'arrow_right_alt',
              iconPosition: 'right'
            }
          ]}
        />
      </HWrapper>
      <div className='chat-container'>
        <div className='contact-list'>
          <div className="contact-list-header">
           
            <h2>Selecione uma opção para iniciar o chat</h2>
          </div>

          <div className="contact-list-items">
            <button className='contact-list-item'>
              <span>
                <img src="" alt="" className='responsavel-profile-icon' />
              </span>
              <span className='responsavel-profile-name'>
                responsavel.poggers@example.com
              </span>
            </button>

            <button className='contact-list-item'>
              <span>
                <img src="" alt="" className='responsavel-profile-icon' />
              </span>
              <span className='responsavel-profile-name'>
                responsavel.poggers@example.com
              </span>
            </button>
          </div>

          <div className="contact-list-footer">
            <GenericButton
              bgColor='orange'
              textContent='Iniciar chat'
            />
          </div>
        </div>

        <Logo className="logo" />

        <div className='chat'>
          <div className='chat-header'>
            <span>
              <img src="" alt="" className='responsavel-profile-icon' />
            </span>
            <span className='responsavel-profile-name'>
              responsavel.poggers@example.com
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat