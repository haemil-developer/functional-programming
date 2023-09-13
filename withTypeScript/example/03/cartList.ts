import { cart } from "../../memoryData/cart";

const cartList = () => {
    let totalCount = 0;
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i ++) {
        if (cart[i].outOfStock === false) {
            console.log(`${cart[i].name}`);
            console.log(`가격: ${cart[i].price}원`);
            console.log(`수량: ${cart[i].quantity}상자`);

            totalCount += cart[i].quantity;
            totalPrice += (cart[i].price * cart[i].quantity);
        } else {
            console.log(`${cart[i].name} (품절)`);
            console.log(`가격: ${cart[i].price}원`);
            console.log(`수량: ${cart[i].quantity}상자`);
        }
    }

    console.log(`전체 수량: ${totalCount}상자`);
    console.log(`전체 가격: ${totalPrice}원`);
}

export function main() {
    cartList();
}