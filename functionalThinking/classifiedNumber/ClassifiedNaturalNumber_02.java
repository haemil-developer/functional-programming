package functionalThinking.classifiedNumber;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * 공유 상태를 최소화
 */
public class ClassifiedNaturalNumber_02 {
    // 모든 메서드는 number를 매개변수로 받아야 한다. 그 값을 유지할 내부 상태는 없다.
    public static boolean isFactor(final int candidate, final int number) {
        return number % candidate == 0;
    }

    // 모든 메서드는 순수함수(부수효과가 없는 함수) 이기 때문에 public static (내부 상태가 없기 때문에 메세더를 숨길 이유가 없음)이다.
    public static Set<Integer> factors(final int number) {
        Set<Integer> factors = new HashSet<>();
        factors.add(1);
        factors.add(number);
        for (int i = 2; i < number; i++) {
            if (isFactor(i, number)) factors.add(i);
        }
        return factors;
    }

    public static int aliquotSum(final Collection<Integer> factors) {
        int sum = 0;
        int targetNumber = Collections.max(factors);

        // 일반적이고 합리적인 변수의 사용으로 함수 수준에서의 재사용이 쉬워졌다.
        for (int n : factors) {
            sum += n;
        }
        return sum - targetNumber;
    }

    public static boolean isPerfect(final int number) { // 캐시가 없기 때문에 반복적으로 사용하기에 비능률 적이다.
        return aliquotSum(factors(number)) == number;
    }

    public static boolean isAbundant(final int number) {
        return aliquotSum(factors(number)) > number;
    }

    public static boolean isDeficient(final int number) {
        return aliquotSum(factors(number)) < number;
    }
}
