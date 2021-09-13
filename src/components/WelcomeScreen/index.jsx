function WelcomeScreen ({handleShowScreen, handleFilter}) {
    return (
        <>
            <h1>Torneio Tribuxo</h1>
            <h3>Clique no botão para encontrar os feitiçeros</h3>
            <button onClick={() => {handleShowScreen() 
                                    handleFilter()}}>Começar!</button>
        </>
    )
}

export default WelcomeScreen