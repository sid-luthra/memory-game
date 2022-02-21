import Card from './Card';

const CardHandler = (props) => {
    
    const { data, cardClick } = props;

    return (
        <div>
            <div
                style={{
                    margin: "50px 400px",
                    display: "grid",
                    gridTemplate: "repeat(3, auto) / repeat(4, auto)",
                    gap: "30px",
                    justifyItems: "center",
                    alignItems: "center",
                }}
            >
            {data.map((position) => {
                return <Card key={position.id} info={position} cardClick={cardClick}/>;
            })}
            </div>
        </div>
    );
};

export default CardHandler;
        

