module.exports = function check(str, bracketsConfig) {
    let s;
    let reg = bracketsConfig.join('-')
                            .replace(/,/g, '')
                            .replace(/\[]/g, '\\[]')
                            .replace(/\(\)/g, '\\(\\)')
                            .replace(/\|\|/g, '\\|\\|')
                            .replace(/-/g, '|');
    reg = new RegExp(reg, 'g')
    while ( s != str ) { 
        s = str;
        str = str.replace(reg, '')
    }
    return !str;
};
