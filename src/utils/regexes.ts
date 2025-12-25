/**
 * Match two or more length parameters.
 *
 * (pixels, percentage, fr, em, rem)
 */
export const moreThanOneLengthParameter = /^(-?[0-9]*\.?[0-9]+\s?(em|fr|px|%)\s*){2,};?$/;

/**
 * Match one or two length parameters.
 *
 * (pixels, percentage, fr, em, rem)
 */
export const oneOrTwoLengthParameters = /^(-?[0-9]*\.?[0-9]+\s?(em|fr|px|%)\s*){1,2};?$/;
