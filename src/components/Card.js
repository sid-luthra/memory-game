const Card = (props) => {
    
    const { info, cardClick } = props;

    const imgurl = "url(" + info.image +")";

    return (
        <div  
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "10px",
                width: "200px",
                padding: "20px",
                backgroundColor: "white",
                color: "black",
                cursor: "pointer",
                boxShadow: "black 4px 4px 10px",
            }}
        >
            <div
                style={{
                    backgroundImage: imgurl,
                    width: "150px",
                    height: "150px",
                    backgroundSize: "contain",
                }}
            >
            </div>
            <div>
                <div
                    style={{
                        fontSize: "1rem",
                        fontWeight: "600"
                    }}
                >{info.caption}</div>
            </div>
            <button id={info.id} onClick={cardClick}>Select</button>
        </div>
    )
}

export default Card;