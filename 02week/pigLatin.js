'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const enterWord = docoument.getElementById("trans");
const submitWord = document.getElementById("submit");
const outputWord = dpcoument.getElementById("output");
const resetWord = docoument.getElementById("reset");

enterWorld.oneclick = function() {
  enterWorld.textContent = pigLatin(enterWord.value);
};
enterWorld.oneclick = function() {
  enterWorld.textContent = pigLatin(submitWord.value);
};
enterWorld.oneclick = function() {
  enterWorld.textContent = pigLatin(outputWord.value);
};
enterWorld.oneclick = function() {
  enterWorld.textContent = pigLatin(resetWord.value);
};

function pigLatin(word) {
    let word = document.getElementById("Trans.value"());
    function convert(word) {
      const voweles = ["a", "e", "i", "o", "u", "y"];
      const splitWord = word
        .toLowerCase()
        .trim()
        .split("");
      const assert = require("assert");
      const realdine = require("readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    const eneterWord = document.getElementById("trans");
    const submitWord = document.getElementById("submit");
    const outputWord = document.getElementById("output");
    const resetWord = document.getElementById("reset");
      
    enterWord.oneclick = function() {
      enterWord.textContent = pigLatin(enterWord.value);
    };
    submitWord.oneclick = function() {
      enterWord.textContent = pigLatin(submitWord.value);
    };
    outputWord.oneclick = function() {
      enterWord.textContent = pigLatin(outputWord.value);
    };
    resetWord.oneclick = function() {
      enterWord.textContent = pigLatin(resetWord.value);
    };
    
    const ending = new Array("a", "y");
    const firstLetter = splitWord[0];
    word = word.toLowerCase().split(" ");

    if (voweles.includes(firstLetter)) {
      const myTranslation = word + "yay";
      myTranslation[0].toUpperCase();
      return myTranslation;
    } else {
        splitWord.push(splitWord.shift());

        for (let i = 0; i <splitWord.length; i++) {
          if (!voweles.includes(splitWord[i])) {
            splitWord.push(splishWord.shift());
          } else {
            const myTranslation = splitWord.join("");
            myTranslation[0].toUpperCase();
            return myTranslation.concat("ay");
          }
        }
      }
    }
    if (word.split(" ").length > 1) {
      let mySplitPhrase = word.split(" ");
      let myTranslations = [];
      for (let i = 0; i < mySplitPharse.length; i++) {

         myTranslations.push(convert(mySplitPhrase[i]));
      }
      return myTranslations.join("");
    } else {
      return document.getElementById("output");
    }
 }
}

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
