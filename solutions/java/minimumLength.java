class Solution {
    public int minimumLength(String s) {
        HashMap<Character, Integer> charFrequencyMap = new HashMap<>();

        for (char currentChar : s.toCharArray()) {
            charFrequencyMap.put(
                    currentChar,
                    charFrequencyMap.getOrDefault(currentChar, 0) + 1
            // gets the current frequency of a character from the HashMap (or returns 0 by default) and increments the frequency by 1
            );
        }

        int deleteCount = 0;
        for (int frequency : charFrequencyMap.values()) {

            // if the frequency is an odd number, we just need to keep an instance
            if (frequency % 2 == 1) {
                deleteCount += frequency - 1;
            }
            
            //if the frequency is an even number, we just need to keep two instances
            if (frequency % 2 == 0) {
                deleteCount += frequency - 2;
            }
        }

        return s.length() - deleteCount;
    }
}