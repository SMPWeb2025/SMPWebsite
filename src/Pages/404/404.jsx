import img from '/404-1.png'
import './404.css'

function NotFound() {
  return (
    <div className='not-found'>
        <img src={img} alt="404 Not Found" style={{ width: '45%'}} />
        <h1 className='not-found-text'>The page you are looking for doesen't exist!</h1>
    </div>
  )
}

export default NotFound