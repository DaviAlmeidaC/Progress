import './BigButton.css'

function BigButton({ icon = "", textContent = "", description = "" }) {
  return (
    <button className='big-button'>

      <span className='icon'>
        <img src={icon} alt="" />
      </span>
      
      <h3 className='text-content'>
        {textContent}
      </h3>

      <div className='border' />

      <p className='description'>
        {description}
      </p>

    </button>
  )
}

export default BigButton