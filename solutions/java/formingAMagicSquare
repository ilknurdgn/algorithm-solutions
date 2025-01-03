public static int formingMagicSquare(List<List<Integer>> s) {
        int[][][] magicSquares = {
            {{8, 1, 6}, {3, 5, 7}, {4, 9, 2}},
            {{2, 9, 4}, {7, 5, 3}, {6, 1, 8}},
            {{6, 1, 8}, {7, 5, 3}, {2, 9, 4}},
            {{4, 9, 2}, {3, 5, 7}, {8, 1, 6}},
            {{8, 3, 4}, {1, 5, 9}, {6, 7, 2}},
            {{2, 7, 6}, {9, 5, 1}, {4, 3, 8}},
            {{4, 3, 8}, {9, 5, 1}, {2, 7, 6}},
            {{6, 7, 2}, {1, 5, 9}, {8, 3, 4}}
        };
        
        int rows = s.size();
        int cols = s.get(1).size();
        int[][] square = new int[rows][cols];
        
        for(int i=0 ; i<rows ; i++){
            for(int j=0 ; j<cols ; j++){
                square[i][j] = s.get(i).get(j);
            }
        }
        
         int minCost = Integer.MAX_VALUE;
         
         for(int[][] magicSquare : magicSquares){
            int cost = 0;
            
            for(int i=0 ; i<rows ; i++){
                for(int j=0 ; j<cols ; j++){
                    cost += Math.abs(square[i][j] - magicSquare[i][j]);
            }
        }
            minCost = Math.min(minCost, cost);
         }
         
         return minCost;
    }