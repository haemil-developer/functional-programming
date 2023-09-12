package functionalThinking.classifiedNumber;

import java.util.stream.IntStream;

import static java.util.stream.IntStream.range;

/**
 * 함수형 프로그래밍
 *  - 람다 블록과 고계함수 사용
 *  - 높은 수준의 추상화에 접근할 수 있음
 */
public class ClassifiedNaturalNumber_03 {
    public static IntStream factorsOf(int number) {
        // IntStream 리턴 -> 자연수의 목록이 아니라 아직 값으로 전환되지 않은 스트림이다.
        return range(1, number +1).filter(potential -> number % potential == 0);
    }

    public static int aliquotSum(int number) {
        return factorsOf(number).sum() - number;
    }

    public static boolean isPerfect(int number) {
        return aliquotSum(number) == number;
    }

    public static boolean isAbundant(int number) {
        return aliquotSum(number) > number;
    }

    public static boolean isDeficient(int number) {
        return aliquotSum(number) < number;
    }
}
