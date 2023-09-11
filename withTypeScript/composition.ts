/*
    - type 만 보았을 때 getPrice 는 문자를 받으면 숫자를 return, undefined 를 보아 입력 값에 따라 값이 정해지지 않은 경우가 있을 것임을 예측 할 수 있다.
    - 공역에 있는 모든 값들이 return으로 사용되지 않아도 된다.
    - TypeScript compiler가 특정 상황에서 함수를 total function으로 만들기 위해 undefined 사용한다.
    - 치역은 7,000/10,000 /15,000/undefined 이 된다.
 */
export function getPrice(name: string): number | undefined {
    if (name === "tomato") {
        return 7000;
    } else if (name === "orange") {
        return 15000;
    } else if (name === "apple") {
        return 10000;
    }
}

export const isExpensive_v1 = (price: number) => {
    return price > 10000;
}

// isEpensive: 치역과 getPrice 공역을 일치 시킨다
export const isExpensive = (price: number | undefined) => {
    if (price === undefined) return false;  // undefined 와 10000 type이 달라서 비교 불가능하기 때문에 undefined 경우 항상 false 추가
    return price > 10000;
}
export const main = () => {
    /*

    * getPrice 의 공역과 isExpensive 의 정의역이 일치하지 않음 -> 합성 불가
    const price = getPrice("tomato");
    return isExpensive_v1(price);

    return isExpensive_v1(getPrice("tomato"));
    */
}

// 함수를 잇는는 것은 "어떤 함수의 출력을 다른 함수의 입력으로 넘겨준다." 는 것이다.
export function isExpensivePrice(name: string): boolean {
    return isExpensive(getPrice(name));
}

// Generic 만들기
// 1. string 을 입력하면 boolean 을 돌려주는 함수 만들기
export const compose_v1 = (g: (y: number | undefined) => boolean, f: (s:string) => number | undefined ) => (x: string) => {
    return g(f(x));
}

// 2. getPrice 한 후 isExpensive 체크하기 때문에, getPrice 를 첫 번째로 한 Generic 함수 작성
export const compose_v2 = <A, B, C>(g: (y: B) => C, f: (s:A) => B ) => (x: A) => {
    return g(f(x));
}
/*
    <A, B, C>(g: (y: B) => C, f: (s:A) => B ) => (x: A) => C

    - 문자들이 너무 많아서 읽기 힘들때는 정의역, 치역만 남겨본다.
    <A, B, C>((B) => C, (A) => B ) => (A) => C
    : A를 입력받으면 B 를 출력하고, B 를 입력받으면 C를 출력하는 함수를 합성하여 A를 입력하면 C 를 출력하는 함수
 */