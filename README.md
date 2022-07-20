Truncates the text at the last space before the given length.
Adds "..." to indicate that the text is truncated.

## Installation
```
npm i truncate-text-between-words
```

## Usage
```javascript
import truncateText from "truncate-text-between-words";
```
```javascript
import { truncateText, getPositionOfLastSpaceBeforeIndex } from "truncate-text-between-words";
```
```javascript
const truncateText = require("truncate-text-between-words").default;
```
```javascript
const { truncateText, getPositionOfLastSpaceBeforeIndex } = require("truncate-text-between-words");
```

```javascript
                  5    10   15   20   25
                  ↓    ↓    ↓    ↓    ↓
const TEXT = "Lorem ipsum dolor sit amet.";
```

## truncateText

```javascript
truncateText( text, maxLength [, { hideIfNoWords }] );

console.log(truncateText(TEXT, 3));
// ...

console.log(truncateText(TEXT, 3, { hideIfNoWords: true }));
//

console.log(truncateText(TEXT, 6));
// Lorem...

console.log(truncateText(TEXT, 15));
// Lorem ipsum...

console.log(truncateText(TEXT, 50));
// Lorem ipsum dolor sit amet.
```

## getPositionOfLastSpaceBeforeIndex

```javascript
getPositionOfLastSpaceBeforeIndex(text, index);

console.log(getPositionOfLastSpaceBeforeIndex(TEXT, 3));
// -1

console.log(getPositionOfLastSpaceBeforeIndex(TEXT, 6));
// 5

console.log(getPositionOfLastSpaceBeforeIndex(TEXT, 15));
// 11

console.log(getPositionOfLastSpaceBeforeIndex(TEXT, 50));
// 21
```
