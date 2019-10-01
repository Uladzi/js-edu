/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(preferences, knowsProgramming, config) {
    const hoursNecessary = knowsProgramming === true ? 800 : 1300;
    const hoursPossible = Math.ceil(hoursNecessary / config[preferences]);
    return hoursPossible;
}