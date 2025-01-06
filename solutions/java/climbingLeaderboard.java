public static List<Integer> climbingLeaderboard(List<Integer> ranked, List<Integer> player) {
    List<Integer> playerRanks = new ArrayList<>();
    
    List<Integer> uniqList = ranked.stream()
                                .distinct()
                                .collect(Collectors.toList());
    
    // Works correctly but causes timeout
    // for(int rank : ranked ){
    //     if(!uniqList.contains(rank)){
    //         uniqList.add(rank);
    //     }
    // } 
    
    int point = uniqList.size() - 1;
    
    for(int score : player){
        while(point >= 0 && score >= uniqList.get(point)){
            point--;
        }
        
        playerRanks.add(point+2);
    }
   
   return playerRanks;
}