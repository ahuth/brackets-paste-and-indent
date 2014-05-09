Paste and Indent
==========

**Extension for [Adobe Brackets](http://brackets.io)**

Automatically apply the correct indentation to pasted text.

When copying and pasting code, its indentation often ends up being wrong for
where it was pasted. The resulting code ends up looking weird:

```javascript
if (Brackets === Awesome) {
    if (Life === Good) {
    return true;
}
}
```

This extension re-indents pasted code to be at the correct indentation level:

```javascript
if (Brackets === Awesome) {
    if (Life === Good) {
        return true;
    }
}
```

##Disabling

Disable the extension for a specific project by adding the `"brackets-paste-and-indent.enabled": false`
key/value to a `.brackets.json` JSON file at the root of your project. Changing this may require
you to restart Brackets.

##Install

1. Open the Extension Manager
2. Search for "paste and indent"
3. Click "install"

##License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
