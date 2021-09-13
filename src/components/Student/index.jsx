import Cards from "../Cards"
import "./style.css"

function Students ({filteredSorceres, handleFilter}) {
    return (
        <>
            <div className="container">
                {filteredSorceres.map((item, index) => (
                    <Cards item={item} index={index} />
                ))}
            </div>
            <button className="againButton" onClick={handleFilter}>Tentar novamente</button>
        </>
    )
}

export default Students