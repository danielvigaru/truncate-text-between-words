Truncates the text at the last space found before the given length. Adds "..." to indicate that the text is truncated.

[![CI](https://github.com/danielvigaru/truncate-text-between-words/actions/workflows/node.js.yml/badge.svg)](https://github.com/danielvigaru/truncate-text-between-words/actions/workflows/node.js.yml)
[![npm](https://img.shields.io/badge/npm-FFF?style=flat&logo=npm&logoColor=fff&color=CB3837)](https://www.npmjs.com/package/truncate-text-between-words)
[![npm bundle size](https://img.shields.io/bundlephobia/min/truncate-text-between-words)](https://bundlephobia.com/package/truncate-text-between-words)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-FF5E5B?style=flat&logo=ko-fi&logoColor=white&color=D34F4C)](https://ko-fi.com/Y8Y1DZBZU)

## Usage

```javascript
import {
    truncateText,
    getPositionOfLastSpaceBeforeIndex,
} from 'truncate-text-between-words';
```

### Let's use this text as example:

```javascript
// Lenght:        5    10   15   20   25
//                ↓    ↓    ↓    ↓    ↓
const TEXT = 'Lorem ipsum dolor sit amet.';
```

## truncateText

Parameters:

```typescript
type TruncateTextOptions = {
    hideIfNoWords?: boolean;
    dotsInsteadOfEllipsis?: boolean;
};

truncateText(text: string, maxLength: number, options?: TruncateTextOptions);
```

### Options

`hideIfNoWords` - default: `false` - Hide the ellipsis if there are no words to show

```javascript
truncateText(TEXT, 3);
// Output: ...

truncateText(TEXT, 3, { hideIfNoWords: true });
// Output:
```

`dotsInsteadOfEllipsis` - default: `false` - Use three dots instead of the ellipsis unicode character U+2026

### Other examples

```javascript
truncateText(TEXT, 6);
// Output: Lorem...

truncateText(TEXT, 15);
// Output: Lorem ipsum...

truncateText(TEXT, 50);
// Output: Lorem ipsum dolor sit amet.
```

## getPositionOfLastSpaceBeforeIndex

```typescript
getPositionOfLastSpaceBeforeIndex(text: string, index: number);

```

```javascript
getPositionOfLastSpaceBeforeIndex(TEXT, 3);
// Output: -1

getPositionOfLastSpaceBeforeIndex(TEXT, 6);
// Output: 5

getPositionOfLastSpaceBeforeIndex(TEXT, 15);
// Output: 11

getPositionOfLastSpaceBeforeIndex(TEXT, 50);
// Output: 21
```
