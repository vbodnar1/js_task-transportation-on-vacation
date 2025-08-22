/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 2;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 6;
  const LONG_TERM_DISCOUNT = 50;
  const basePrise = 40;
  let cost = 0;

  if (days > SHORT_TERM) {
    if (days > LONG_TERM) {
      cost = basePrise * days - LONG_TERM_DISCOUNT;

      return cost;
    }
    cost = basePrise * days - SHORT_TERM_DISCOUNT;

    return cost;
  }
  cost = basePrise * days;

  return cost;
}

module.exports = calculateRentalCost;
