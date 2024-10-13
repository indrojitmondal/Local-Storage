console.log('Connected local storage');

const getLocalStorageValue = ()=>{
    let cart={};
    const storeCart=localStorage.getItem('cart');
    
       if(storeCart)
        cart = JSON.parse(storeCart);
       else
         localStorage.setItem('cart','');
    return cart;
}
const saveValuesInLocalStorage = (product,quantity)=>{
    let shoppingCart=getLocalStorageValue();
    shoppingCart[product]=quantity;
    shoppingCart=JSON.stringify(shoppingCart);
    localStorage.setItem('cart',shoppingCart)


}
const displayProduct =()=>{

    const ulContainer = document.getElementById('ulContainer');
    const products= getLocalStorageValue();
    console.log("Now");
    console.log(products);
    for (const key in products) {

        const li = document.createElement('li');
        console.log(products[key]);
        li.innerText=`${key} ${products[key]}`;
        ulContainer.appendChild(li);
        
    }


   
    

}

const showProduct = ()=>{
    
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    saveValuesInLocalStorage(product,quantity);
    productField.value='';
    quantityField.value='';
    
    console.log(product,quantity);
    displayProduct();
 
    
}