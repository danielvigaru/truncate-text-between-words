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

const ELLIPSIS = '…';
const DOTS = '...';

type TruncateTextOptions = {
    hideIfNoWords?: boolean;
    dotsInsteadOfEllipsis?: boolean;
};

/**
 * Truncates text on the last space before the given index, and adds '...' at the end
 * @param {String} text Text to be truncated
 * @param {Number} maxLength Desired max length. Output might be shorter because it's truncated on the last space found before the given maxLength
 * @param {Boolean} options.hideIfNoWords Hide the ellipsis if there are no words to show
 * @param {Boolean} options.ellipsisInstedOfDots Use the ellipsis unicode character U+2026 instead of three dots
 * @returns Truncated text
 */
function truncateText(
    text: string,
    maxLength: number,
    options?: TruncateTextOptions
): string {
    const _text = text.trim();
    if (_text.length <= maxLength) return _text;

    const _options: Required<TruncateTextOptions> = Object.assign(
        {},
        {
            hideIfNoWords: false,
            dotsInsteadOfEllipsis: false,
        },
        options
    );

    const indexOfLastSpace = getPositionOfLastSpaceBeforeIndex(
        _text,
        maxLength
    );
    if (indexOfLastSpace === -1) {
        return _options.hideIfNoWords
            ? ''
            : _options.dotsInsteadOfEllipsis
            ? DOTS
            : ELLIPSIS;
    }

    return (
        _text.slice(0, indexOfLastSpace) +
        (_options.dotsInsteadOfEllipsis ? DOTS : ELLIPSIS)
    );
}

export { getPositionOfLastSpaceBeforeIndex, truncateText };
