/** 
 * Coderill Javascript Library v1.0.0
 * 
 * Author: Coderill
 * URI: http://coderill.com
 * Created at: 2017, February 28
 * Updated at: 2017, February 28
 * Version: 1.0.0
 * License: MIT
 * 
 * Description: This is a open source software. Released under the MIT license. Copyright 2015-2016 Coderill.
 */




/**
 * usages: ucwords(string)
 * Returns a string with the first character of each word
 * It takes 1 parameter of string
 * 
 */
function ucwords(str) {
    txt = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });

    return txt;
}







/**
 * usages: ucfirst(string)
 * Returns a string with the first character of given string
 * It takes 1 parameter of string
 * 
 */
function ucfirst(str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
}







/**
 * usages: ucSentence(string)
 * Returns a string with the first character of each sentence of given string
 * It takes 1 parameter of string
 * 
 */
function ucSentence(str) {
    return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}








/**
 * usages: strTrim(string)
 * Strip whitespace from the beginning and end of a string
 * It takes 1 parameter of string
 * 
 * NB: if browser not support tream() method
 */
function strTrim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
}







/**
 * usages: strReplace(search, replace, string)
 * Replace all occurrences of the search string with the replacement string
 * It takes 3 parameteres of string
 * 
 */
function strReplace(search, replace, str) {
    var txt = str.replace(/^\s+|\s+$/gm, '');
    return txt.split(search).join(replace);
}