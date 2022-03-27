// common functions shared by all calculators

const C = 299792458; // speed of light [m/s]

/**
 * calculate wavelength from frequency
 * @param {Number} f frequency in Hz
 * @returns wavelength in meters
 */
function freqToWavelength(f) {
    return C/f;
}
