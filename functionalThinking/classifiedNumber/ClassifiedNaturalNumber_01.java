package functionalThinking.classifiedNumber;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * 명령형 프로그래밍
 */
public class ClassifiedNaturalNumber_01 {
    private int number;     // 대상이 되는 수를 보유한 내부 상태
    public Map<Integer, Integer> cache; // 합을 반복해서 계산하는 것을 피하기 위한 내부 캐시

    public ClassifiedNaturalNumber_01(int targetNumber) {
        number = targetNumber;
        cache = new HashMap<>();
    }

    public boolean isFactor(int potential) {
        return number % potential == 0;
    }

    public Set<Integer> getFactors() {
        Set<Integer> factors = new HashSet<>();
        factors.add(1);
        factors.add(number);
        for (int i = 2; i < number; i++) {
            if (isFactor(i)) factors.add(i);
        }
        return factors;
    }

    // 자신을 제외한 모든 약수의 합 계산
    public int aliquotSum() {
        if (cache.get(number) == null) {
            int sum = 0;
            for (int i : getFactors()) {
                sum += i;
                cache.put(number, sum - number);
            }
        }
        return cache.get(number);
    }

    public boolean isPerfect() {
        return aliquotSum() == number;
    }

    public boolean isAbundant() {
        return aliquotSum() > number;
    }

    public boolean isDeficient() {
        return aliquotSum() < number;
    }
}
