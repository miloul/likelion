var obj ={
    productName:"Robot",
    quantity:10,
    price:"15,000",
    showPrice:function(){
        document.querySelector("#display").innerHTML = this.productName+"제품의 가격은 "+this.price+"입니다";
    }
}

obj.showPrice()