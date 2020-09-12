class BatchObfuscate {
    static obfuscate(code, prefix = "obfuscated", debugGuard = true) {
        const randomSymbols = Array.from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890").sort(() => Math.random() - 0.5);
        const secureCommand = ["dir %temp%", "ipconfig", "tree %windir%", "cls", "tree %appdata%"];
        const set = prefix + Math.random().toString(36).substring(10);

        let obfuscatedCode = "";
        let secureCode = [];
        let letterTab = {};

        // Debug protection / Защита от отладки
        if (debugGuard) {
            secureCode.push("DOSKEY echo=cls");
            code.replace("\\", "/").split("\n").forEach((item, i) => {
                let randomNum = Math.floor(Math.random() * (4 - 0)) + 0;
                secureCode.push(`${secureCommand[randomNum]}> nul && ${item} > nul && cls`);
            });
            secureCode = secureCode.join("")
        }

        // Code obfuscation / Обфускация кода
        randomSymbols.forEach((item, i) => {
            letterTab[item] = `%${set}:~${i},1%`;
        });

        for (let i = 0; i < secureCode.length; i++) {
            if (letterTab[secureCode[i]]) {
                obfuscatedCode += letterTab[secureCode[i]];
            } else {
                obfuscatedCode += secureCode[i];
            }
        }

        return `@echo off\nSet ${set}=${randomSymbols.join("")}\n${obfuscatedCode}`;
    }
};

if (typeof module == "object" && module.exports != undefined) {
    module.exports = BatchObfuscate;
}