/*
    - identity function - ID function
    입력된 어떠한 값을 그대로 리턴만 하는 함수를  라고 부름
*/

// 숫자를 그대로 돌려주는 함수
const idNumber = (n: number) => {
    return n;
}

// 문자열을 그대로 돌려주는 함수
const idString = (str: string) => {
    return str;
}

// boolean값을 그대로 돌려주는 함수
const idBoolean = (b: boolean) => {
    return b;
}

/*
    Generic:
       - 함수에 타입을 달아주다보면 비슷하게 생긴 타입이 중복될 때가 있는데,  type에대한 이러한 중복을 쉽게 다룰수 있게 하는 것.
       - 타입을 입력받으면 type을 return하는 type에대한 함수다 라고 말할 수 있음

    - 위의 함수가 type별로 필요하다면, 모든 type별로 다 따로 만들어야 할까?
    - type은 서로 달라도 type에 관계없이 구현은 모두 동일하다.
    - type을 매개변수로 구현하여 어떤 type을 받아도 같은 동작을 하도록 구현
    - 함수는 () 를 통해 매개변수 표현, 제네릭은 <> 통해 매개변수 표현
    - 실제 구현을 생각하기 전에 함수의 type을 최대한 일반화 시켜서 generic을 사용하여 함수의 type을 만들고, type의 안내에 따라 code를 작성하는 방식이 선호되기도 함.
 */


// 어떤 타입의 값이라도 그대로 돌려주는 함수
// 제네릭함수는 자기자신을 돌려주는것 이외에는 다른 구현이 불가능함
const id = <T>(x: T) => {
    return x;
}
