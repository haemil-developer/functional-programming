const suits = ['♠️', '♥️', '♣️', '♦️'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];

// 2중 for 문
// 모든 카드 만들기
const cards: Array<string> = []
for (const suit of suits) {
    for (const number of numbers) {
        cards.push(suit + number)
    }
}

// 모든 카드 목록은 아래의 작업이 완료된 것이다.
const cards2 =
    suits.map((suit) =>
        numbers.map((number) =>
            suit + number)  // 카드는 무늬와 숫자를 연결 한 문자열이다.
    );
// Array<Array<T>> => Array<T>
// .flat() -> flatMap
