//let words = require("./words.js");
import { words } from "./words.js"

//let wordsNew = words.slice(0, 10000);


// let numberMap = {
//     "1": [[2, 0], [2, 1], [2, 3], [2, 4], [1, 3], [1, 1]],
//     "2": [[3, 0], [3, 1], [3, 3], [3, 4], [2, 3], [2, 1]],
//     "3": [[4, 0], [4, 1], [4, 3], [4, 4], [3, 3], [3, 1]],
//     "4": [[5, 0], [5, 1], [5, 3], [5, 4], [4, 3], [4, 1]],
// 
//     "5": [[1, 3], [2, 4], [2, 6], [1, 7], [1, 6], [1, 4]],
//     "6": [[2, 3], [3, 4], [3, 6], [2, 7], [2, 6], [2, 4]],
//     "7": [[3, 3], [4, 4], [4, 6], [3, 7], [3, 6], [3, 4]],
//     "8": [[4, 3], [5, 4], [5, 6], [4, 7], [4, 6], [4, 4]],
//     "9": [[5, 3], [6, 4], [6, 6], [5, 7], [5, 6], [5, 4]],
// 
//     "10": [[1, 6], [1, 7], [1, 9], [1, 10], [0, 9], [0, 7]],
//     "11": [[2, 6], [2, 7], [2, 9], [2, 10], [1, 9], [1, 7]],
//     "12": [[3, 6], [3, 7], [3, 9], [3, 10], [2, 9], [2, 7]],
//     "13": [[4, 6], [4, 7], [4, 9], [4, 10], [3, 9], [3, 7]],
//     "14": [[5, 6], [5, 7], [5, 9], [5, 10], [4, 9], [4, 7]],
//     "15": [[6, 6], [6, 7], [6, 9], [6, 10], [5, 9], [5, 7]],
// 
//     "16": [[0, 9], [1, 10], [1, 12], [0, 13], [0, 12], [0, 10]],
//     "17": [[1, 9], [2, 10], [2, 12], [1, 13], [1, 12], [1, 10]],
//     "18": [[2, 9], [3, 10], [3, 12], [2, 13], [2, 12], [2, 10]],
//     "19": [[3, 9], [4, 10], [4, 12], [3, 13], [3, 12], [3, 10]],
//     "20": [[4, 9], [5, 10], [5, 12], [4, 13], [4, 12], [4, 10]],
//     "21": [[5, 9], [6, 10], [6, 12], [5, 13], [5, 12], [5, 10]],
//     "22": [[6, 9], [7, 10], [7, 12], [6, 13], [6, 12], [6, 10]],
// 
//     "23": [[1, 12], [1, 13], [1, 15], [1, 16], [0, 15], [0, 13]],
//     "24": [[2, 12], [2, 13], [2, 15], [2, 16], [1, 15], [1, 13]],
//     "25": [[3, 12], [3, 13], [3, 15], [3, 16], [2, 15], [2, 13]],
//     "26": [[4, 12], [4, 13], [4, 15], [4, 16], [3, 15], [3, 13]],
//     "27": [[5, 12], [5, 13], [5, 15], [5, 16], [4, 15], [4, 13]],
//     "28": [[6, 12], [6, 13], [6, 15], [6, 16], [5, 15], [5, 13]],
// 
//     "29": [[1, 15], [2, 16], [2, 18], [1, 19], [1, 18], [1, 16]],
//     "30": [[2, 15], [3, 16], [3, 18], [2, 19], [2, 18], [2, 16]],
//     "31": [[3, 15], [4, 16], [4, 18], [3, 19], [3, 18], [3, 16]],
//     "32": [[4, 15], [5, 16], [5, 18], [4, 19], [4, 18], [4, 16]],
//     "32": [[5, 15], [6, 16], [6, 18], [5, 19], [5, 18], [5, 16]],
// 
//     "33": [[2, 18], [2, 19], [2, 21], [2, 22], [1, 21], [1, 19]],
//     "34": [[3, 18], [3, 19], [3, 21], [3, 22], [2, 21], [2, 19]],
//     "35": [[4, 18], [4, 19], [4, 21], [4, 22], [3, 21], [3, 19]],
//     "37": [[5, 18], [5, 19], [5, 21], [5, 22], [4, 21], [4, 19]],
// };



export const hexagonNum10 = [3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 3];

export const xStartOffset10 = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1]

export const hexagonNum7 = [2, 3, 2, 3, 4, 3, 4, 3, 2, 3, 2];

export const xStartOffset7 = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1]

function fillWordList(words, numberMap, wordList) {
    // Shuffle the words array to start with a random word
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(words);

    // Check if the word can be placed in the given position in wordList
    function canPlaceWord(word, position, wordList, numberMap) {
        let coordinates = numberMap[position];
        for (let i = 0; i < 6; i++) {
            for (let key in wordList) {
                if (wordList[key]) {
                    let existingCoordinates = numberMap[key];
                    for (let j = 0; j < 6; j++) {
                        if (existingCoordinates[j][0] === coordinates[i][0] &&
                            existingCoordinates[j][1] === coordinates[i][1] &&
                            wordList[key][j] !== word[i]) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }

    // Backtracking function to fill the wordList
    function backtrack(position) {
        if (position > Object.keys(wordList).length) return true;
        //console.log(wordList);

        for (let i = 0; i < words.length; i++) {
            if (canPlaceWord(words[i], position, wordList, numberMap)) {
                wordList[position] = words[i];

                if (backtrack(position + 1)) return true;

                wordList[position] = "";
            }
        }
        return false;
    }

    backtrack(1);
}
export default function honeycombGen(numberWords) {


    function genBoard(numberMap, wordList, hexagonNum, xStartOffset) {
        let number = 1;
        const boardRowNum = hexagonNum.length;
        const boardColNum = Math.max(...hexagonNum);
        const board = Array(boardRowNum).fill().map(() => Array(boardColNum).fill(0));

        fillWordList(words, numberMap, wordList);

        for (let i = 0; i < boardRowNum; i++) {
            let xstart = xStartOffset[i];
            let hexagons = hexagonNum[i];
            for (let j = xstart; j < xstart + hexagons; j++) {

                if (i % 3 == 2) {
                    board[i][j] = number;
                    number++;
                }
            }

        }
        for (const k in numberMap) {
            const indexes = numberMap[k];
            const word = wordList[k];
            for (let l = 0; l < 6; l++) {
                const index = indexes[l];
                board[index[1]][index[0]] = word[l];
            }
        }
        return board;
    }



    if (numberWords === 7) {

        const numberMap = {

            "1": [[1, 0], [1, 1], [1, 3], [1, 4], [0, 3], [0, 1]],
            "2": [[2, 0], [2, 1], [2, 3], [2, 4], [1, 3], [1, 1]],

            "3": [[0, 3], [1, 4], [1, 6], [0, 7], [0, 6], [0, 4]],
            "4": [[1, 3], [2, 4], [2, 6], [1, 7], [1, 6], [1, 4]],
            "5": [[2, 3], [3, 4], [3, 6], [2, 7], [2, 6], [2, 4]],

            "6": [[1, 6], [1, 7], [1, 9], [1, 10], [0, 9], [0, 7]],
            "7": [[2, 6], [2, 7], [2, 9], [2, 10], [1, 9], [1, 7]],
        };

        let wordList = {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
        }

        return [genBoard(numberMap, wordList, hexagonNum7, xStartOffset7), wordList];
    } else if (numberWords === 10) {
        const numberMap = {

            "1": [[1, 0], [1, 1], [1, 3], [1, 4], [0, 3], [0, 1]],
            "2": [[2, 0], [2, 1], [2, 3], [2, 4], [1, 3], [1, 1]],
            "3": [[3, 0], [3, 1], [3, 3], [3, 4], [2, 3], [2, 1]],

            "4": [[0, 3], [1, 4], [1, 6], [0, 7], [0, 6], [0, 4]],
            "5": [[1, 3], [2, 4], [2, 6], [1, 7], [1, 6], [1, 4]],
            "6": [[2, 3], [3, 4], [3, 6], [2, 7], [2, 6], [2, 4]],
            "7": [[3, 3], [4, 4], [4, 6], [3, 7], [3, 6], [3, 4]],

            "8": [[1, 6], [1, 7], [1, 9], [1, 10], [0, 9], [0, 7]],
            "9": [[2, 6], [2, 7], [2, 9], [2, 10], [1, 9], [1, 7]],
            "10": [[3, 6], [3, 7], [3, 9], [3, 10], [2, 9], [2, 7]],
        };


        let wordList = {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
            "10": "",
        }
        return [genBoard(numberMap, wordList, hexagonNum10, xStartOffset10), wordList];
    }

}

//const boardHon = honeycombGen(10);
//console.log(boardHon);



//function fillWordListCSP(words, numberMap, wordList) {
//    // Function to check if word can be placed at a given position
//    function canPlaceWord(word, position, wordList, numberMap) {
//        let coordinates = numberMap[position];
//        for (let key in wordList) {
//            if (wordList[key]) {
//                let existingCoordinates = numberMap[key];
//                for (let i = 0; i < 6; i++) {
//                    for (let j = 0; j < 6; j++) {
//                        if (existingCoordinates[j][0] === coordinates[i][0] &&
//                            existingCoordinates[j][1] === coordinates[i][1] &&
//                            wordList[key][j] !== word[i]) {
//                            return false;
//                        }
//                    }
//                }
//            }
//        }
//        return true;
//    }
//
//    // Function to get domain of possible words for a position
//    function getDomain(position) {
//        return words.filter(word => canPlaceWord(word, position, wordList, numberMap));
//    }
//
//    // Function to select the next variable using MRV heuristic
//    function selectNextVariable() {
//        let minRemainingValues = Infinity;
//        let selectedVariable = null;
//
//        for (let key in wordList) {
//            if (!wordList[key]) {
//                let domain = getDomain(key);
//                if (domain.length < minRemainingValues) {
//                    minRemainingValues = domain.length;
//                    selectedVariable = key;
//                }
//            }
//        }
//
//        return selectedVariable;
//    }
//
//    // CSP solver function
//    function solveCSP() {
//
//console.log(wordList);
//        let unassignedVariable = selectNextVariable();
//        if (unassignedVariable === null) return true;
//
//        let domain = getDomain(unassignedVariable);
//        for (let word of domain) {
//            wordList[unassignedVariable] = word;
//
//            if (solveCSP()) {
//                return true;
//            }
//
//            wordList[unassignedVariable] = "";
//        }
//
//        return false;
//    }
//
//    solveCSP();
//}
//
//// Assuming words is loaded from words.js
//
//console.log(wordList);

// Assuming words is loaded from words.js
//fillWordList(words, numberMap, wordList);
//console.log(wordList);
//function fillWordList(words, numberMap, wordList) {
//    // Shuffle the words array to start with a random word
//    function shuffle(array) {
//        for (let i = array.length - 1; i > 0; i--) {
//            const j = Math.floor(Math.random() * (i + 1));
//            [array[i], array[j]] = [array[j], array[i]];
//        }
//    }
//
//    shuffle(words);
//
//    // Preprocess to filter words based on initial constraints
//    function filterWords(words, position, numberMap, wordList) {
//        let coordinates = numberMap[position];
//        return words.filter(word => {
//            for (let key in wordList) {
//                if (wordList[key]) {
//                    let existingCoordinates = numberMap[key];
//                    for (let i = 0; i < 6; i++) {
//                        for (let j = 0; j < 6; j++) {
//                            if (existingCoordinates[j][0] === coordinates[i][0] &&
//                                existingCoordinates[j][1] === coordinates[i][1] &&
//                                wordList[key][j] !== word[i]) {
//                                return false;
//                            }
//                        }
//                    }
//                }
//            }
//            return true;
//        });
//    }
//
//    // Memoization to store previously computed results
//    let memo = {};
//
//    function canPlaceWord(word, position, wordList, numberMap) {
//        let coordinates = numberMap[position];
//        for (let key in wordList) {
//            if (wordList[key]) {
//                let existingCoordinates = numberMap[key];
//                for (let i = 0; i < 6; i++) {
//                    for (let j = 0; j < 6; j++) {
//                        if (existingCoordinates[j][0] === coordinates[i][0] &&
//                            existingCoordinates[j][1] === coordinates[i][1] &&
//                            wordList[key][j] !== word[i]) {
//                            return false;
//                        }
//                    }
//                }
//            }
//        }
//        return true;
//    }
//
//    // Backtracking function to fill the wordList
//    function backtrack(position) {
//        if (position > Object.keys(wordList).length) return true;
//
//        if (memo[position]) return memo[position];
//
//        let possibleWords = filterWords(words, position, numberMap, wordList);
//        console.log(wordList);
//
//        for (let i = 0; i < possibleWords.length; i++) {
//            if (canPlaceWord(possibleWords[i], position, wordList, numberMap)) {
//                wordList[position] = possibleWords[i];
//
//                if (backtrack(position + 1)) {
//                    memo[position] = true;
//                    return true;
//                }
//
//                wordList[position] = "";
//            }
//        }
//
//        memo[position] = false;
//        return false;
//    }
//
//    backtrack(1);
//}
//
//// Assuming words is loaded from words.js
//fillWordList(words, numberMap, wordList);
//console.log(wordList);
