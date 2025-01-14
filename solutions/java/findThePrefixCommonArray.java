class Solution {
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        int count = 0;
        int length = A.length;
        int[] prefixArray = new int[length];

        Set<Integer> set_A = new HashSet<>();
        Set<Integer> set_B = new HashSet<>();

        for(int i= 0 ; i <= length-1 ; i++){
            set_A.add(A[i]);
            if(set_B.contains(A[i])){
                    count++;
            }

            set_B.add(B[i]);
            if(set_A.contains(B[i])){
                    count++;
            }
            

            prefixArray[i] = count;
        }

        return prefixArray;
    }
}