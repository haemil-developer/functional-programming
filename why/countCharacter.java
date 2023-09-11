package why;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * text file을 읽고, 가장 많이 사용된 단어들을 찾고, 그 단어들과 빈도를 정렬된 list로 출력하라.
 */
public class countCharacter {
    /*
    비 단어(조사나 다른 연계어 - glue word) 집합.
     */
    private Set<String> NON_WORDS = new HashSet<String>() {{
        add("the"); add("and"); add("of"); add("to"); add("a");
        add("i"); add("it"); add("in"); add("or"); add("is");
        add("be");
    }};

    /*
    1. 정규식으로 단어를 추출한다.
    2. 찾은 단어가 처음일 경우 Map 추가
    3. 처음이 아니면 빈도수 증가
     */
    public Map wordFreq_ver1(String words) {
        TreeMap<String, Integer> wordMap = new TreeMap<String, Integer>();
        Matcher m = Pattern.compile("\\w+").matcher(words);
        while (m.find()) {
            String word = m.group().toLowerCase();
            if (! NON_WORDS.contains(word)) {
                if (wordMap.get(word) == null) {
                    wordMap.put(word, 1);
                } else {
                    wordMap.put(word, wordMap.get(word) + 1);
                }
            }
        }
        return wordMap;
    }

    private List<String> regexToList(String words, String regex) {
        List wordList = new ArrayList();
        Matcher m = Pattern.compile(regex).matcher(words);
        while ( m. find() ){
            wordList.add(m.group());
        }
        return wordList;
    }

    /*
    1. 모든 단어를 소문자로 바꾼다.
    2. 비 단어를 걸러낸다
    3. 나머지 단어들의 빈도 수를 측정한다.
     */
    public Map wordFreq_ver2(String words) {
        TreeMap<String, Integer> wordMap = new TreeMap<>();
        regexToList(words, "\\w+").stream()
                .map(w -> w.toLowerCase())
                .filter(w -> !NON_WORDS.contains(w))
                .forEach(w -> wordMap.put(w, wordMap.put(w, wordMap.getOrDefault(w, 0) + 1)));
        return wordMap;
    }
}
