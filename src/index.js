module.exports = function check(str, bracketsConfig) {
    var s;
    let reg = [];
    for(let item of bracketsConfig) {
        switch(item.join('')) {
            case '[]' :
                reg.push('\\[]');
                break;
            case '()':
                reg.push('\\(\\)');
                break;
            case '||' :
                reg.push('\\|\\|');
                break;
            default:
            reg.push(item.join(''));
        }
    }
    reg = new RegExp(reg.join('|'), 'g')
    console.log(reg);
    while ( s != str ) { 
        s = str;
        str = str.replace(reg, '')
    }
    return !str;
};
