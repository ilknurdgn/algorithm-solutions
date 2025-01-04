public static int pickingNumbers(List<Integer> a) {
    int maxCount = 0;
    
    Collections.sort(a);


    for(int i=0 ; i< a.size() -1 ; i++){
       int count = 0;
       for(int j= i ; j< a.size() ; j++ ){
           
           if( Math.abs(a.get(i) - a.get(j)) <=1  ){
               count++;
           }else{
               break;
           }
           
          
       }
        maxCount= Math.max(maxCount, count);
    }

      return maxCount;
   }