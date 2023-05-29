import "./Hotel.css"

function HotelsData(props){
    return(
        <div className="h-card">
            <div className="h-image">
                <img src={props.image} alt="/" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
            
        </div>
    )
}

export default HotelsData;