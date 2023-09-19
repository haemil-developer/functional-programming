// undefined 가 여가지 맥락에서 사용되어 또 다른 혼동이 생길 수 있음.
// export type Option<A> = A | undefined; 

// 함수형 프로그래밍에서 값의 변환은 허용하지 않기 때문에 readOnly 설정
// 값이 있는 것
export type Some<A> = {
    readonly _tag: "Some"
    readonly  value: A
}

// 값이 없는 것
export type None = {
    readonly _tag: "None"
}

export type Option<A> = Some<A> | None;

export const some = <A>(value: A): Option<A> => ({ _tag: "Some", value });

export const none = (): Option<never> => ({ _tag: "None"});

export const isSome = <A>(oa:Option<A>): oa is Some<A> => oa._tag === "Some";

export const isNone = <A>(oa:Option<A>): oa is None => oa._tag === "None";

export const fromUndefined = <A>(a: A | undefined): Option<A> => {
    if (a === undefined) return none();
    return some(a);
}

// 값이 없으면 지정된 값을 사용한다.
// 값이 있으면 해당 값을 사용한다.
export const getOrElse = <A>(oa: Option<A>, defaultValue: A): A => {
    if(isNone(oa)) return defaultValue;
    return oa.value;
}