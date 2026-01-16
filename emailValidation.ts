function isEMailValid(email : string) : boolean {

    const indexA = email.indexOf("@");
    const beforeA = email.substring(0, indexA);
    const afterA = email.substring(indexA+1);


    if(indexA === -1)
        return false;

    if(!afterA.includes("."))
        return false;

    if(afterA.endsWith("."))
        return false;

    if(email.includes(" "))
        return false;

    if(beforeA.length === 0 || afterA.length === 0)
        return false;

    
    return true;
}

module.exports = {isEMailValid};