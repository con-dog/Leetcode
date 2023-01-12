/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteLetterCounts = new Array(26);
    const magazineLetterCounts = new Array(26);

    for (let i = 0; i < 26; i++) {
        ransomNoteLetterCounts[i] = 0;
        magazineLetterCounts[i] = 0;
    }

    // Update counts
    let index;
    for (let char of ransomNote) {
        index = char.charCodeAt() - 97;
        ransomNoteLetterCounts[index] += 1;
    }
    for (let char of magazine) {
        index = char.charCodeAt() - 97;
        magazineLetterCounts[index] += 1;
    }

    return !magazineLetterCounts.map((el, index) => {
        return el - ransomNoteLetterCounts[index]
    }).some(el => el < 0)



};