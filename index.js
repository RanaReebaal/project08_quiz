"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
var score = [];
inquirer
    .prompt([
    {
        type: "list",
        name: "f_1",
        message: "The highest waterfall in the world is:",
        choices: ['Nigerian waterfall', 'Louiz wale waterfall', 'Angel waterfall', 'Tibetian waterfall']
    },
    {
        type: "list",
        name: "f_2",
        message: "Death valley of California is famous for:",
        choices: ['Delicious Foods', 'Hottest Area', 'Buildings', 'Forests']
    },
    {
        type: "list",
        name: "f_3",
        message: "The deepest part of the ocean is:",
        choices: ['Mariana Trench', 'Venizuala loops', 'Bermuda triangle', 'Black valley']
    },
    {
        type: "list",
        name: "f_4",
        message: "Lowest point of Europe is:",
        choices: ['Virgo bay', 'Caspian Sea', 'Mt.Elbrus', 'GreyMark forests']
    },
    {
        type: "list",
        name: "f_5",
        message: "Antarctica contains area of the earth is:",
        choices: ['1.3%', '11.7%', '3.4%', '8.2%']
    }
])
    .then(function (answers) {
    var f_1 = answers.f_1;
    var f_2 = answers.f_2;
    var f_3 = answers.f_3;
    var f_4 = answers.f_4;
    var f_5 = answers.f_5;
    if (f_1 == 'Angel waterfall') {
        score.push(10);
    }
    ;
    if (f_2 == 'Hottest Area') {
        score.push(10);
    }
    ;
    if (f_3 == 'Mariana Trench') {
        score.push(10);
    }
    ;
    if (f_4 == 'Caspian Sea') {
        score.push(10);
    }
    ;
    if (f_5 == '8.2%') {
        score.push(10);
    }
    ;
    var sum = 0;
    for (var i in score) {
        sum += score[i];
    }
    console.log("Your obtained scores are:".concat(sum, " out of 50"));
});
