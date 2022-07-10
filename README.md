Truncates the text at the last space before the given index.

```javascript
import truncateText from "truncate-text-between-words";
// OR
const truncateText = require("truncate-text-between-words");

truncateText(text, maxLength);
```

```javascript
TEXT = "Lorem ipsum dolor sit amet.";

console.log(truncateText(TEXT, 3));
// ...

console.log(truncateText(TEXT, 6));
// Lorem...

console.log(truncateText(TEXT, 15));
// Lorem ipsum...

console.log(truncateText(TEXT, 50));
// Lorem ipsum dolor sit amet.
```
