function CartImplement() {

    const [products, SetProducts] = React.useState(
        [
            { name: "Red Valvet", price: 290, qty: 0, total: 0 },
            { name: "Black Forest", price: 250, qty: 0, total: 0 },
            { name: "Ferrero rocher", price: 450, qty: 0, total: 0 },
            { name: "Creamy Heaven", price: 350, qty: 0, total: 0 },
            { name: "Nutella Blast", price: 480, qty: 0, total: 0 },
        ]);

    const [totalCart, setTotalCart] = React.useState({
        totalQty: 0,
        totalAmt: 0
    });

    const calculateTotal = () => {
        var qty = 0, price = 0;
        products.map(
            (p) => (
                (qty = qty + p.qty), (price = price + p.total)
            )
        );
        setTotalCart({ totalQty: qty, totalAmt: price });
    };

    const [tempProduct, setTempProduct] = React.useState(products);

    var addCart = (i) => {
        products[i].qty = products[i].qty + 1;
        products[i].total = products[i].qty * products[i].price;
        setTempProduct(products);
        SetProducts(tempProduct);
        calculateTotal();
    };

    var removeCart = (i) => {
        products[i].qty = products[i].qty - 1;
        products[i].total = products[i].qty * products[i].price;
        setTempProduct(products);
        SetProducts(tempProduct);
        calculateTotal();
    };


    return (
        <>
            <h1>Cake Shop</h1>
            Product   Price   Qty
            Total Price : {totalCart.totalAmt}
            Quantity : {totalCart.totalQty}

            {


                products.map((p, i) =>
                    <div style={{ marginTop: 15 }}>
                        <span style={{ marginLeft: 50 }}>{p.name}</span>
                        <span style={{ marginLeft: 50 }}>{p.price}</span>
                        <span style={{ marginLeft: 50 }}>{p.qty}</span>
                        <span style={{ marginLeft: 50 }}>{p.total}</span>
                        <button onClick={() => { addCart(i) }}> {(p.qty == 0) ? <span>Add to cart</span> : <span>+</span>} </button>
                        {(p.qty > 0) && <button onClick={() => { removeCart(i) }}>-</button>}

                    </div>
                )
            }
        </>
    )

}

ReactDOM.render(
    <CartImplement />,
    document.getElementById("root"));
