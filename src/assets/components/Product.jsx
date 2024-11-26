
const Product = ({ label,src,name,price}) => {
    return (
        <article >
            <span>
                {label}
            </span>
            <img src={src} />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    );
};

export default Product;