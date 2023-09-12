// 특정 타입의 배열이 아닌 모든 타입의 배열에 대해 동작할 수 있어야 함으로 Generic을 사용 해야함. type parameter A
export const map = <A, B>(array: Array<A>, f: (a: A) => B): Array<B> => {
    const result: Array<B> = []
    for (const value of array) {
        result.push(f(value));
    }
    return result;
}