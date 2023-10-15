import './GenericButton.css'

function GenericButton({ bgColor = 'transparent', textColor = 'white', textContent = '', fontBold = true, icon = '', iconPosition = 'right' }) {

  function setPosition(position) {
    switch (position) {
      case 'right':
        return 'row'
      case 'left':
        return 'row-reverse'
      case 'bottom':
        return 'column'
      case 'top':
        return 'column-reverse'
      default:
        console.warn(`Você definiu uma posição inválida (${position}). A posição padrão será considerada (right).`)
        return 'right'
    }
  }

  return (
    <button
      className='generic-button'
      type='button'
      style={
        {
          backgroundColor: bgColor,
          color: textColor,
          fontWeight: fontBold ? 'bold' : 'normal',
          border: bgColor === 'transparent' ? `1px solid ${textColor}` : 'none',
          flexDirection: setPosition(iconPosition)
        }
      }
    >
      <span>
        {textContent}
      </span>

      {
        icon !== '' &&
        <span className="icon material-symbols-outlined">
          {icon}
        </span>
      }

    </button>
  )
}

export default GenericButton