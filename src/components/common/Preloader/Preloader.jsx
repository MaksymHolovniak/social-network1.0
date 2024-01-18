import s from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

let Preloader = (props) => {
    return (
    <div className={s.preloader}>
        <img src= {preloader} alt='Preloader' />
    </div>
    )
}

export default Preloader