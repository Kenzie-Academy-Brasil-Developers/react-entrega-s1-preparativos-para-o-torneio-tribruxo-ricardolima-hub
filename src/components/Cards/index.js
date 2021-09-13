import "./style.css"

function Cards ({item: {name, image, house}, index}) {
    return (
        <div key={index}>
            <img className={house} src={image} alt=""></img>
            <p>{name}</p>
            <p className={house + "-p"}>{house}</p>
        </div>
    )
}

export default Cards