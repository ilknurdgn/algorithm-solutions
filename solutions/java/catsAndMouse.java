static String catAndMouse(int x, int y, int z) {
    int distanceOfCatA = Math.abs(x-z);
    int distanceOfCatB = Math.abs(y-z);
if( distanceOfCatA < distanceOfCatB){
    return "Cat A";
}
else if(distanceOfCatA > distanceOfCatB){
    return "Cat B";
}
else{
    return "Mouse C";
}

}