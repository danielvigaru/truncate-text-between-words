/**
 * Returns the position of the last space in the string that's before the given index
 * @param {String} text The text that will be searched
 * @param {Number} index Searches for last space before this index
 * @returns {Number} The position of the space
 */
function getPositionOfLastSpaceBeforeIndex(
    text: string,
    index: number
): number {
    return text.slice(0, index).lastIndexOf(' ');
}

/**
 * Truncates text on the last space before the given index, and adds '...' at the end
 * @param {String} text Text to be truncated
 * @param {Number} maxLength Desired max length. Output might be shorter because it's truncated on the last space found before the given maxLength
 * @param {Boolean} options.hideIfNoWords Hide the ellipsis if there are no words to show
 * @returns Truncated text
 */
function truncateText(
    text: string,
    maxLength: number,
    options?: {
        hideIfNoWords?: boolean;
    }
): string {
    const _text = text.trim();
    if (_text.length <= maxLength) return _text;

    const indexOfLastSpace = getPositionOfLastSpaceBeforeIndex(
        _text,
        maxLength
    );
    if (indexOfLastSpace === -1) {
        return options?.hideIfNoWords ? '' : '...';
    }

    return _text.slice(0, indexOfLastSpace) + '...';
}

export { getPositionOfLastSpaceBeforeIndex, truncateText };
