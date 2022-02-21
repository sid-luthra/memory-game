const Scoreboard = (props) => {
    const { score, highScore } = props;
    
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "black",
                color: "white",
                display: "grid",
                gridTemplate: "auto / auto 1fr auto",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 50px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                }}
            >Puppy Mania!</div>
            <div
                style={{
                    gridArea: "1 / 3",
                    textAlign: "right",
                    display: "grid",
                    gridTemplate: "auto auto / auto",
                    gap: "10px",
                }}
            >
                <div>Current Score: {score}</div>
                <div>High Score: {highScore}</div>
            </div>
        </div>
    )
}

export default Scoreboard;