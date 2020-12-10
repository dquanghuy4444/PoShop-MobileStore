const BuyNow = (id , history) =>{
    const listId = window.sessionStorage.getItem('id');
    if(!listId){
        window.sessionStorage.setItem('id',[id]);
    }

    if(history){
        history.push('/cart');
    }
}

export default BuyNow;