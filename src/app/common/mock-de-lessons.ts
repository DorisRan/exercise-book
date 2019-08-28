import { DeLession } from './de-lesson';

export const DELESSIONS: DeLession[] = [
    {
        vocabulary: new Map(
            [["drum", "鼓"],
            ["guitar", "吉他"],
            ["flute", "横笛"],
            ["piano", "钢琴"],
            ["trumpet", "小号"],
            ["violin", "小提琴"]]),
        sPattern: [
            "Do you play the (    ) ?",
            "Yes, I play the (    ).",
            "No, I play the (   ).",
            "Does he/she play the (    )?",
            "Yes, he/she plays the (   )."],
        phonics: new Map([
            ["st", ["step", "stop"]],
            ["sl", ["slam", "slap"]],
            ["sp", ["spit", "spot"]]])
    },
    {
        vocabulary: new Map(
            []),
        sPattern: [
            "What is your phone number ?",
            "My phone number is (    )."],
        phonics: new Map([
            ["ng", ["sing", "long"]],
            ["nk", ["bank", "sink"]]])
    },
    {
        vocabulary: new Map(
            [["ten", "10"],
            ["twenty", "20"],
            ["thirty", "30"],
            ["forty", "40"],
            ["fifty", "50"],
            ["sixty", "60"],
            ["seventy", "70"],
            ["eighty", "80"],
            ["ninety", "90"],
            ["one hundred", "100"],
            ["dallor", "美元 $"]
            ]),
        sPattern: [
            "How much is this/that?",
            "It's/That's (  ) dollars."
        ],
        phonics: new Map([
            ["th", ["mother", "father"]]])
    },
    {
        vocabulary: new Map(
            [["basketball", "篮球"],
            ["table tennis", "乒乓球"],
            ["tennis", "网球"],
            ["golf", "高尔夫球"],
            ["football", "橄榄球"],
            ["soccer", "足球"]
            ]),
        sPattern: [
            "What sport do you play?",
            "I play (   )."
        ],
        phonics: new Map([
            ["pl", ["plan", "plus"]],
            ["bl", ["block", "black"]],
            ["cl", ["club", "clap"]]])
    },
    {
        vocabulary: new Map(
            [["listen to music", "听音乐"],
            ["read books", "看书"],
            ["watch TV", "看电视"],
            ["write stories", "写故事"],
            ["play video games", "玩电子游戏"]
            ]),
        sPattern: [
            "What do you like to do?",
            "I like to (   )."
        ],
        phonics: new Map([
            ["tr", ["trip", "truck"]],
            ["dr", ["drum", "drink"]],
            ["br", ["brush", "bring"]]])
    },
];