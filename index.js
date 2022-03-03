class Solution {
    constructor() {
        //todo
    }
    isAnagramOfPalindrome(text) {
        const txtLength = text.length;
        const txtSorted = text.split("").sort();

        let arr = [];

        for (let i = 0; i < txtLength; i++) {
            if (txtSorted[i + 1] !== undefined && txtSorted[i] === txtSorted[i + 1]) {
                const sl = txtSorted.slice(i, i + 2);
                arr.push(...sl);
                i++; // otro salto al iterador
            }
        }

        return txtSorted.length <= arr.length + 1;
    }
}

// const sol = new Solution().isAnagramOfPalindrome("madam");
const sol = new Solution().isAnagramOfPalindrome("ana lava lana");

console.log(sol);
