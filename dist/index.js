import _ from './helpers.js';
export function md5(textPassword) {
    return _(textPassword);
}
export function verifyMD5(textPassword, md5Password) {
    let isValid = false;
    const md5Passwords = typeof md5Password === 'string' ? [md5Password] : md5Password;
    for (const cryptPasswd of md5Passwords) {
        const hashType = cryptPasswd.match(/\{([^}]+)\}/);
        if (hashType && hashType[1] === 'MD5') {
            const hashedPassword = md5(textPassword);
            if (hashedPassword === cryptPasswd)
                isValid = true;
        }
    }
    return isValid;
}
//# sourceMappingURL=index.js.map