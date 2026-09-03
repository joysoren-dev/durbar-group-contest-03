function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  // cake kenar por baki taka ber korchi
  let remainingMoney = totalMoney - cakeCost;

  // cake kenar por ar taka na thakle ekhanei return korchi
  if (remainingMoney <= 0) {
    return remainingMoney;
  }

  // baki taka diye koyta donut kinte parbo seta ber korchi ekhane
  let donut = Math.floor(remainingMoney / donutCost);

  // ekhane donut kenar por je taka baki thakbe seta update korchi
  remainingMoney = remainingMoney - donut * donutCost;

  // seshe e baki taka ta return korchi
  return remainingMoney;
}
