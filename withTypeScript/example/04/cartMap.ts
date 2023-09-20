import {Item} from "../../memoryData/cartDiscount";
import * as O from "./options";

const stockItem = (item: Item): string => {
    const optionDiscountPrice = O.fromUndefined(item.discountPrice);
    const discountPrice = O.getOrElse(optionDiscountPrice, 0);


    const saleText = O.mapOrElse(optionDiscountPrice, (discountPrice) => `${discountPrice}원 할인`, "");

    // const optionSaleText = O.map(optionDiscountPrice, (discountPrice) => `${discountPrice}원 할인`);
    // const saleText = O.getOrElse(optionSaleText, "");

    // let saleText = '';
    // if (O.isSome(optionDiscountPrice)) {
    //     saleText = `${discountPrice}원 할인`;
    // }

    // let discountPrice = 0;
    // if (item.discountPrice !== undefined) {
    //     saleText = `${item.discountPrice}원 할인`;
    //     discountPrice = item.discountPrice;
    // }
    return `${item.name} / 가격: ${item.price - discountPrice} ${saleText}/ 수량: ${item.quantity}`;
}

const outOfStockItem = (item: Item): string => {
    return `${item.name}(품절) / 가격: ${item.price} / 수량: ${item.quantity}`;
}

const item = (item: Item): string => {
    if (item.outOfStock) {
        return outOfStockItem(item);
    } else {
        return stockItem(item);
    }
}

const totalCalculator = (list: Array<Item>, getValue: (item: Item) => number) => {
    // 전체 목록 중 재고가 있는 상품만 getValue 를 실행하고 그 값으 모두 더한다.
    let total = 0;
    for (let i = 0; i< list.length; i++) {
        if(list[i].outOfStock === false) {
            total += getValue(list[i]);
        }
    }
    return total;
}

const totalCalculator_v2 = (list: Array<Item>, getValue: (item: Item) => number) => {
    // 전체 목록 중 재고가 있는 상품만 getValue 를 실행하고 그 값으 모두 더한다.
    return list.filter(item => item.outOfStock === false)  // 1. 재고가 있는 상품만 분류하기
        .map(getValue)  // 2. 분류된 상품들에 대해서 getValue 실행하기
        .reduce((total, value) => total + value, 0);    // 3. getValue가 실행된 값 모두 더하기
}

// 잘못 사용한 map
const totalCalculator_v3 = (list: Array<Item>, getValue: (item: Item) => number) => {
    const result: Array<number> = [];
    // forEach 를 사용하면 리턴이 void 이기때문에 의미있는 값이 리턴되지않고 더이상 함수를 합성할 수 없게된다.
    list.forEach(function (item) {
        if (item.outOfStock === false) {
            result.push(getValue(item));
        }
    })
    return result.reduce((total, value) => total + value);
}

const totalCount = (list: Array<Item>): string => {
    const totalCount = totalCalculator(list, (item) => item.quantity);
    return `전체 수량: ${totalCount}상자`;
}

const totalPrice = (list: Array<Item>): string => {
    const totalPrice = totalCalculator(list, (item) => item.price * item.quantity);

    const totalDiscountPrice = totalCalculator(list, (item) => {
        const discountPrice = O.getOrElse(O.fromUndefined(item.discountPrice), 0);
        // let discountPrice = 0;
        // if (item.discountPrice !== undefined) {
        //     discountPrice = item.discountPrice;
        // }
        return discountPrice * item.quantity;
    })

    return `전체 가격: ${totalPrice - totalDiscountPrice}원 (총 ${totalDiscountPrice}원 할인)`;
}

