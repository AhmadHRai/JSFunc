/**
 * Validates a URL using a regular expression.
 *
 * @param {string} url - The URL string to validate.
 * @returns {boolean} - Returns true if the URL is valid, false otherwise.
 *
 * Example usage:
 * console.log(isValidUrl("https://www.example.com")); // true
 * console.log(isValidUrl("http://www.example.com")); // true
 * console.log(isValidUrl("www.example.com")); // true
 * console.log(isValidUrl("ftp://example.com")); // false
 * console.log(isValidUrl("http://example")); // false
 */
function isValidUrl(url) {
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;
    return urlPattern.test(url);
}

/**
 * Validates a URL using the built-in URL constructor.
 *
 * @param {string} urlString - The URL string to validate.
 * @returns {boolean} - Returns true if the URL is valid, false otherwise.
 *
 * Example usage:
 * console.log(isValidUrlNative("https://www.example.com")); // true
 * console.log(isValidUrlNative("invalid-url")); // false
 */
function isValidUrlNative(urlString) {
    try {
        new URL(urlString);
        return true;
    } catch (error) {
        return false;
    }
}
