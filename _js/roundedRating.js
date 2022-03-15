/**
 * Implement function calculateRoundedRating:
 *
 * Function takes an exact rating of the product - the float number between 1
 * and 5 including (range `[1, 5]`) and returns the rounded rating to closest
 * 0.5 (1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5 or 5).
 *
 * calculateRoundedRating(3.666); // 3.5
 * calculateRoundedRating(1.92); // 2
 * calculateRoundedRating(4.299999); // 4.5
 * calculateRoundedRating(1.2499999); // 1
 *
 * @param {number} rating
 *
 * @return {number}
 */

function calculateRoundedRating(rating) {
  ratingCeil = Math.ceil(rating);
  let difference = ratingCeil - rating;
  let ratingAbs = Math.abs(difference - 0.5);

  if (difference <= 0.5 && ratingAbs < 0.25) {
    return Math.floor(rating) + 0.5;
  } else if (difference < 0.5 && ratingAbs > 0.25) {
    return Math.ceil(rating);
  } else if (difference > 0.5 && ratingAbs < 0.25) {
    return Math.floor(rating) + 0.5;
  } else {
    return Math.floor(rating);
  }
}
calculateRoundedRating(3.666);
