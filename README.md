# batchObfuscator
A simple batch obfuscator written in the JavaScript programming language.

[Русская версия README.md](https://github.com/ethernalsteve/batchObfuscator/blob/master/README_RU.md)

## How to install?
To run **batchObfuscator** you must clone the repository with the `git clone https://github.com/ethernalsteve/batchObfuscator.git` or download the contents of this repository. Then run the file index.html

## Use it in your project
### Including
#### Browser (Script tag)
```javascript
<script src="https://github.com/ethernalsteve/batchObfuscator/raw/master/batchObfuscate.js"></script>
```
#### Node.JS
For use with a Node.JS, you need to download the file batchObfuscate.js.
##### ES6 module syntax:
```javascript
import batchObfuscate from "./batchObfuscate.js";
```
##### CommonJS syntax:
```javascript
const batchObfuscate = require("./batchObfuscate.js");
```

### Example
#### Simple obfuscation:
```javascript
batchObfuscate("start calc.exe");
```
#### Obfuscation using a custom prefix:
```javascript
batchObfuscate("shutdown /r", "abc");
```
#### Obfuscation using a custom prefix and disabling anti-debugging:
```javascript
batchObfuscate("del *.* /q", "abc", false);
```
