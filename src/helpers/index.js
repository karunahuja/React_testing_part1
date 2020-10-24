
export function getLetterMatchCount(guessedWord,secretWord){

    const secretLetterSet=newSet(secretWord.split(''));
    const guessedLetterSet=newSet(guessedWord.split(''));

    return [...secretLetterSet].filter(letter=>guessedLetterSet.has(letter)).length;
    
}