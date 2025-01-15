class Solution {

    public int minimizeXor(int num1, int num2) {
        // sonuç 'num1' olarak belirleniyor
        int result = num1;

        // hedef bit sayısını, 'num2' içindeki toplam bit sayısına eşit belirleniyor
        int targetSetBitsCount = Integer.bitCount(num2);

        // başlangıç bit sayısı olarak 'num1(result)' içindeki toplam bit sayısına eşit belirleniyor
        int setBitsCount = Integer.bitCount(result);

        // bitleri kontrol edebilmek için en sağdaki bitten başlanıyor
        int currentBit = 0;

        // eğer 'num1' içindeki toplam bit sayısı hedef bit sayısının altındaysa
        while (setBitsCount < targetSetBitsCount) {

            // eğer mevcut bit 1 değilse
            if (!isSet(result, currentBit)) {

                // mevcut biti 1'e çevririr
                result = setBit(result, currentBit);
                setBitsCount++;
            }
            // bir sonraki bit pozisyonuna geçiyoruz
            currentBit++;
        }

        // eğer 'num1' içindeki toplam bit sayısı hedef bit sayısının üstündeyse
        while (setBitsCount > targetSetBitsCount) {

            // eğer mevcut bit 1 ise
            if (isSet(result, currentBit)) {

                // mevcut biti 0'a çevririr
                result = unsetBit(result, currentBit);
                setBitsCount--;
            }
            // bir sonraki bite geçirir
            currentBit++;
        }

        return result;

    }

    // belirtilen 'bit' pozisyonunun 1 olup olmadığını kontrol eder
    private boolean isSet(int x, int bit) {
        return (x & (1 << bit)) != 0;
    }

    // belirtilen 'biti' 1 yapar ve sonucu döndürür
    private int setBit(int x, int bit) {
        return x | (1 << bit);
    }

    // belirtilen 'biti' 0 yapar ve sonucu döndürür
    private int unsetBit(int x, int bit) {
        return x & ~(1 << bit);
    }

}