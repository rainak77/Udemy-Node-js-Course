const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined,
    roll: 5
};



// const { label: productLabel, name, stock, salesPrice, roll = 119 } = product;
// console.log(productLabel);
// console.log(roll);

const transaction = (type, { label }) => {
    console.log(type, label);
};

transaction('Order', product);