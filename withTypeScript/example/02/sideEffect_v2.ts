/**
 * 명령형 프로그래밍
    - 가격을 더해주는 함수 생성
    : 실수를 줄이고, 재사용성을 높임

 totalPrice 라는 전역 변수를 사용하고 있어서, 순수 함수가 아닌 sideEffect 를 일으키는 sub routine (procedure)
 **/

export let totalPrice = 0;

export function addTomato() {
    totalPrice += 7000;
}

export function  addOrange() {
    totalPrice += 15000;
}

export function addApple() {
    totalPrice += 10000;
}

export function list1() {
    // tomato, orange, apple 1box
    addTomato();
    addOrange();
    addApple();
}

export function list2() {
    // tomato 2boxes
    addTomato();
    addTomato();
}

export function list3() {
    // orange 100boxes
    for (let i = 0; i <100; i++) {
        addOrange();
    }
}

export function main() {
    list3();
}
