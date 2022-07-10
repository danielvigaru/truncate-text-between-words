const getPositionOfLastSpaceBeforeIndex = require("./get-position-of-last-space-before-index");

/**
 * Truncates text on the last space before the given index, and adds '...' at the end
 * @param {String} text Text to be truncated
 * @param {Number} maxLength Desired max length. Output might be shorter because it's truncated on the last space found before the given maxLength
 * @returns Truncated text
 */

function truncateText(text, maxLength) {
    const _text = text.trim();
    if (_text.length <= maxLength) return _text;

    const indexOfLastSpace = getPositionOfLastSpaceBeforeIndex(_text, maxLength);
    if (indexOfLastSpace === -1) return "...";

    const truncatedText = _text.slice(0, indexOfLastSpace) + "...";
    return truncatedText;
}

module.exports = truncateText;
