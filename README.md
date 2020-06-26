# MATLAB Align


## Features

Align your MATLAB code by assignment(`=`).
It has additional support for trailing comment.  
And it doesn't require you to select what to be aligned, the extension will figure it out by itself.

## How to use
There are three ways to invoke the Align command.
1. "Align MATLAB Code" in the right-click menu
2. "Align MATLAB Code" in Command Palette
3. Shortcut `Ctrl+Shift+A`


## Extension Settings


### `matlab-align.indentBase` : "firstline" | "activeline" | "dontchange"
Specify if it use the indentation of the firstline or the line under the cursor. Below are the `activeline` effect, notice how it's different from the screenshot above.

If `indentBase` is `dontchange`, better-align will only align lines with same indentation and will not modify the indentation.


### `matlab-align.surroundSpace`
Default value:
```
matlab-align.surroundSpace : {
  "assignment" : [1, 1], // The first number specify how much space to add to the left, can be negative.
                         // The second number is how much space to the right, can be negative.
  "comment"    : 2       // Special how much space to add between the trailing comment and the code.
                         // If this value is negative, it means don't align the trailing comment.
}
```
