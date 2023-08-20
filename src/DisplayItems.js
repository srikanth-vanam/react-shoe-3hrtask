const DisplayItems = (props) => {
    return ( <>
    {props.items.map((item)=>(
        <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.desc}</span>
            <span>{item.price}</span>
            <p>Quantity Available</p>
            <button>Buy large({item.large})</button>
            <button>Buy medium({item.med})</button>
            <button>buy small({item.small})</button>
        </div>
    ))}
    </> );
}
 
export default DisplayItems;