# batchObfuscator
Простой пакетный обфускатор, написанный на языке программирования JavaScript.

[English version README.md](https://github.com/ethernalsteve/batchObfuscator/blob/master/README.md)

## Как установить?
Для запуска **batchObfuscator** вы должны склонировать репозиторий командой `git clone https://github.com/ethernalsteve/batchObfuscator.git` или скачать содержимое данного репозитория вручную. Затем запустите файл index.html

## Использование в своём проекте
### Подключение
Для использования необходимо скачать файл batchObfuscate.js.
#### Browser
```javascript
<script src="https://github.com/ethernalsteve/batchObfuscator/raw/master/batchObfuscate.js"></script>
```
#### Node.JS
##### Синтаксис ES6 module:
```javascript
import batchObfuscate from "./batchObfuscate.js";
```
##### Синтаксис CommonJS:
```javascript
const batchObfuscate = require("./batchObfuscate.js");
```

### Примеры
#### Обычная обфускация:
```javascript
batchObfuscate("start calc.exe");
```
#### Обфускация с использованием кастомного префикса:
```javascript
batchObfuscate("shutdown /r", "abc");
```
#### Обфускация с использованием кастомного префикса и отключением анти-отладки:
```javascript
batchObfuscate("del *.* /q", "abc", false);
```
