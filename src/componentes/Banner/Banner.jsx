import banner from './banner.png';

export default function Banner(props) {

    return(
    <div className={props.classNome}>
        <h1>A galeria mais completa do espaço</h1>
        <img src={banner} alt='A imgem da terra vista do espaço'/>
    </div>
    )
}