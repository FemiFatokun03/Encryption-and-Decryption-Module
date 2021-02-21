# Encryption-and-Decryption-Module


    All you have to do is to copy the code hash_dehash.js into your project, or include hash_dehash.js file in your html, then you can call the functions as mentioned below:

    *** Hashing ***
    const string = "Femi Fatokun";
    const hashedString = hash(string);

    //The hashedString variable now contains a hashed string which is based on the `rules` object that was created earlier in the code.

    *** Dehashing ***
    const deHashedString = dehash(hashedString);

    //Now the the deHashedString variable contains the string "Femi Fatokun" which is gotten from dehashing the hashedString which contains a hashed version of the string based on the 'ruls' objec.

    *** Goal ***
    The goal of this program is to reduce the risk of security breach in current day web application, for frontend applications it is mostly useful to use this snippet in a Question and Answer application that depends on a local json file or javascript object, all the questions and answer can be encrypted in the json file or javascript object and then decrypt it while displaying it to the user.

    The snippet is majorly applicable on Node.js CRUD applications, in this manner every input that is to be saved on the database is being encrypted using the hash function, and then whenever you fetch data from the database, you can decrypt the fetched data and then display it to users. The importance of this is that, even with a sql injection attack on your site, the attacker is left with nothing given that your dahashing algorithm remains in your website's storage which is almost unbreachable.

    *** Note ***
    1. This function is to be placed on the backend of your site so that it is unaccessible to users, in order to keep the patterns in the 'rules' object a secret to yourself only.
    2. You can modify the 'rules' object and add more characters, but do not repeat a character or a pattern.
