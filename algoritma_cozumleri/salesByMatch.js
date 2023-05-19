function sockMerchant(n, ar) {
  let typeOfSock = [];
  let pairOfSocks = 0;
  ar.forEach((num) => {
    if (!typeOfSock.includes(num)) {
      typeOfSock.push(num);
    }
  });

  for (let i = 0; i < typeOfSock.length; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (typeOfSock[i] == ar[j]) {
        count++;
      }
    }

    pairOfSocks += Math.floor(count / 2);
  }

  return pairOfSocks;
}
