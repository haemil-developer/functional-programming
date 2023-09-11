/**
 * 선언형 프로그래밍
 **/

export function priceOfTomato() {
    return 7000;
}

export function  priceOfOrange() {
    return 15000;
}

export function priceOfApple() {
    return 10000;
}

/*
    mapping(사상): 입력값이 출력값에 대응된다
    - 추가적인 일은 전혀 하지않고 과일의 이름을 입력받으면 가격만 돌려줌
    - key에 대응하는 value가 있는 데이터 자료구조
      (java = map, typeScript = record, python = dict)
 */
function getPrice(name: string) {
    if (name === "tomato") {
        return 7000;
    } else if (name === "orange") {
        return 15000;
    } else if (name === "apple") {
        return 10000;
    }
}

// record 로 refactoring
// 계산이 오래 걸리는 함수의 출력을 memorization 과 같은 방법으로 캐싱해서 사용하기도 함
// 같은 입력값에 대해 같은 출력값을 가져서 가능한 일
const priceOfFruit = {
    tomato: 7000,
    orange: 1500,
    apple: 10000
}

// 모든 가능한 키에 대한 응답을 대응하기에 무리가 있음 (key 추가 시 value 추가 필요)
const isEven = {
    tomato: true,
    orange: true,
    apple: false
}

// 추상화된 로직과 코드로 작성
const isEvenFn = (str: string) => str.length % 2 === 0;

export function list1() {
    // tomato, orange, apple 1box
    return priceOfTomato() + priceOfOrange() + priceOfApple();
}

export function list2() {
    // tomato 2boxes
    return priceOfTomato() + priceOfTomato();
}

export function list3() {
    // orange 100boxes
    return priceOfOrange() * 100;
}

export function main() {
    list3();
}
