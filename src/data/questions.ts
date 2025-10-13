export type Question = {
    question: string;
    options: string[];
    answer: string;
};

export const questions: Question[] = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used for inserting an image?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options: ["font-color", "color", "text-color", "fgcolor"],
        answer: "color"
    },
    {
        question: "What is the default position value of an HTML element in CSS?",
        options: ["absolute", "relative", "static", "fixed"],
        answer: "static"
    },
    {
        question: "Which method is used to print output in Java?",
        options: ["System.out.print()", "print()", "console.log()", "echo()"],
        answer: "System.out.print()"
    },
    {
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "object", "define", "new"],
        answer: "class"
    },
    {
        question: "Which of the following is a valid data type in Python?",
        options: ["integer", "str", "float", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How do you start a comment in Python?",
        options: ["//", "#", "/*", "<!--"],
        answer: "#"
    },
    {
        question: "Which CSS property controls the spacing between lines of text?",
        options: ["letter-spacing", "line-height", "text-spacing", "word-spacing"],
        answer: "line-height"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "styles", "style", "font"],
        answer: "style"
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "function", "def", "define"],
        answer: "def"
    },
    {
        question: "Which symbol is used for ID selectors in CSS?",
        options: ["#", ".", "*", "&"],
        answer: "#"
    },
    {
        question: "What is the output of: print(2 ** 3) in Python?",
        options: ["6", "8", "9", "5"],
        answer: "8"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which operator is used for string concatenation in Java?",
        options: ["+", "&", ".", "*"],
        answer: "+"
    }

];