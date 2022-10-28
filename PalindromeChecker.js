const entries = [
    "Hello Bob, how was your weekend?",
    "It was great I finally reach the final level of that game",
    "There are no palindromes in this sentence",
];

function main(sentences){
    sentences.forEach(sentence => {
        const words = getWordsFromSentence(sentence);
        const containsPalindrome = words.some(word => {
            return(word, checkWordIsPalindrome(word));
        });
        console.log("\"",sentence,"\" contains " ,containsPalindrome ? "a" : "no", " palindrome.");
    });
}

function getWordsFromSentence(sentence){
    const words = sentence.split(" ");
    return words.map(w => filterSpecialCharactersFromString(w));
}

function filterSpecialCharactersFromString(input){
    return input.split('').filter(char => /[a-zA-Z]/.test(char)).join('').toLowerCase();
}

function checkWordIsPalindrome(word){
    const letters = word.split('');
    const size = word.length;
    for(let i = 0; i < size / 2; i++){
        if(letters[i] != letters[size - i - 1]){
            return false
        }
    }
    return true;
}

main(entries);