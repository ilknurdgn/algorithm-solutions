public static int hurdleRace(int k, List<Integer> height) {
    int maxHeight = 0;
    
    for(int h : height){
       maxHeight = Math.max(maxHeight, h);
    }
    
    if( k >= maxHeight){
        return 0;
    }
    
    int requiredDoses = (maxHeight - k);
    
    return requiredDoses;

}