const friend = "BRUTUS"
const shiftValue = 3;

//Step 1:
const latAlph = "abcdefghijklmnopqrstuvwxyz";

//Step 2:
let encryptName = ""
for(let i = 0; i < friend.length; i++){
    const currLett = friend[i];
    const currIndex = latAlph.indexOf(currLett.toLowerCase());
    const newIndex = (currIndex + shiftValue) % latAlph.length;
    encryptName += latAlph[newIndex].toUpperCase();
}

//Question 1: Using a loop provides the advantage of automation, allowing the coder to see each letter of the name being processed in order without even more code needed, over manually encrypting each letter. The loop guarantees that encryption will be used consistently and in a way that can be used for names with all quantities of length.
//Question 2: The role of % alphabet.length is to work as a modulus operator, with the result that if the sum of the current index and the shift value exceeds the length of the alphabet, there will be a wrap around back to the beginning. It aids in the encryption process by making it continuous because once it reaches the letter "z" then the sum will return to the beginning of the alphabet at the letter "a."