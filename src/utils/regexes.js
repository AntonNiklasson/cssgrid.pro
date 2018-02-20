/**
 * Match any kind of valid CSS length parameter.
 * 2 or more parameters.
 *
 * pixels, percentage, fr, em, rem.
 */
export const moreThanOneLengthParameter = /^(-?[0-9]*\.?[0-9]+\s?(em|fr|px|%)\s*){2,}$/
