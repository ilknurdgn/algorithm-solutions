function bonAppetit(bill, k, b) {
  const totalCost = bill.reduce((acc, billValue) => acc + billValue, 0);
  const costPerPerson = (totalCost - bill[k]) / 2;

  if (costPerPerson == b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - costPerPerson);
  }
}
