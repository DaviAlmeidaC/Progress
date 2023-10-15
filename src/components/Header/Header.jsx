import GenericButton from '../GenericButton/GenericButton'
import logoImg from '../../assets/Union.png'
import './Header.css'

export function NavButton({ buttons = [] }) {
  return (
    <div className="nav-buttons">
      {
        buttons.map((btn, index) => {
          return (
            <GenericButton
              key={index}
              bgColor={btn.bgColor}
              textColor={btn.textColor}
              textContent={btn.textContent}
              fontBold={btn.fontBold}
              icon={btn.icon}
              iconPosition={btn.iconPosition}
            />
          )
        })
      }
    </div>
  )
}

export function Logo() {
  return (
    <span className='logo'>
      <img src={logoImg} alt="Logo Progressus" />
      PROGRESSUS
    </span>
  )
}

export function HWrapper({ children }) {
  return (
    <header className="header">
      {children}
    </header>
  )
}

export default { HWrapper, Logo, NavButton }