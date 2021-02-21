
//Encryption pattern for 95 chracters
const rules = {
    //Small letters encryption patterns
    "a" : "~!@","b" : "~!#","c" : "~!$","d" : "~!%","e" : "~!^","f" : "~!&","g" : "~!*","h" : "~!(","i" : "~!)","j" : "~!-", "k" : "~!_", "l" : "~!=", "m" : "~!+", "n" : "!~!", "o" : "!~@", "p" : "!~#", "q" : "!~$", "r" : "!~%", "s" : "!~^", "t" : "!~&", "u" : "!~*", "v" : "!~(", "w" : "!~)", "x" : "!~-", "y" : "!~_", "z" : "!~=",
    //Captal Letters encryption patterns
    "A" : "!~+", "B" : "@~!", "C" : "@~@", "D" : "@~#", "E" : "@~$", "F" : "@~%", "G" : "@~^", "H" : "@~&", "I" : "@~*", "J" : "@~(", "K" : "@~)", "L" : "@~-", "M" : "@~=", "N" : "@~_", "O" : "@~+", "P" : "#~!", "Q" : "#~@", "R" : "#~#", "S" : "#~$", "T" : "#~%", "U" : "#~^", "V" : "#~&", "W" : "#~*", "X" : "#~(", "Y" : "#~)", "Z" : "#~-",
    //Number encryption
    "0" : "^~#", "1" : "^~$", "2" : "^~%", "3" : "^~^", "4" : "^~&", "5" : "^~*", "6" : "^~(", "7" : "^~)", "8" : "^~-", "9" : "^~=",
    //Special Characters encryption patterns
    " " : "#~=", "comma" : "#~_", "." : "#~+", "/" : "$~!", "<" : "$~@", ">" : "$~#", "?" : "$~$", ";" : "$~%", "'" : "$~^", ":" : "$~&", '"' : "$~*", "[" : "$~(", "]" : "$~)", "{" : "$~-", "}" : "$~=", "\\" : "$~_", "|" : "$~+", "`" : "%~!", "!" : "%~@", "@" : "%~#", "#" : "%~$", "$" : "%~%", "%" : "%~^", "^" : "%~&", "&" : "%~*", "*" : "%~(", "(" : "%~)", ")" : "%~-", "-" : "%~=", "=" : "%~_", "_" : "%~+", "+" : "^~!", '~' : "^~@"
}
//function to hash chracterws/strings
function hash(input){
    const seperated = input.split('');
    const new_word = [];
    for (var i = 0; i < seperated.length; i++) {
        if (seperated[i] == ','){
            new_word.push('comma');
        }else{
            new_word.push(rules[`${seperated[i]}`]);
        }
    }
    return new_word.join(',');
}
//function to dehash chracters/strings that was hashed by the hashing function
function dehash(input){
    const aligned = input.split(',');
    const new_word = [];
    for (var i = 0; i < aligned.length; i++) {
        if (aligned[i] == 'comma') {
            new_word.push(',');
        }else{
            filter = Object.keys(rules).filter((res)=>{
                if(rules[res] == aligned[i]){
                    return rules[`${res}`];
                }
            });
            new_word.push(filter[0]);
        }
    }
    return new_word.join('');
}
/***How to use***/

/***
    All you have to do is to copy this code into your project, or include this file in your html, then you can call the functions as mentioned below:

    *** Hashing ***
    const string = "Femi Fatokun";
    const hashedString = hash(string);

    //The hashedString variable now contains a hashed string which is based on the `rules` object that was created earlier in the code.

    *** Dehashing ***
    const deHashedString = dehash(hashedString);

    //Now the the deHashedString variable contains the string "Femi Fatokun" which is gotten from dehashing the hashedString which contains a hashed version of the string based on the 'ruls' objec.

    *** Goal ***
    The goal of this program is to reduce the risk of security breach in current day web application, for frontend applications it is mostly useful to use this snippet in a Question and Answer application that depends on a local json file or javascript object, all the questions and answer can be encrypted in the json file or javascript object and then dehashing it while displaying it to the user.

    The snippet is majorly applicable on Node.js CRUD applications, in this manner every input that is to be saved on the database is being hashed using the hash function, and then whenever you fetch data from the database, you can dehash the fetched data and then display it to users. The importance of this is that, even with a sql injection attack on your site, the attacker is left with nothing given that your dahashing algorithm remains in your website's storage which is almost unbreachable.

    *** Note ***
    1. This function is to be placed on the backend of your site so that it is unaccessible to users, in order to keep the pattenrs in the 'rules' object a secret to yourself only.
    2. You can modify the 'rules' object and add more characters, but do not repeat a character or a pattern.

***/
