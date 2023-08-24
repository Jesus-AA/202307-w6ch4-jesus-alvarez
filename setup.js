import inquirer from 'inquirer';
const courses = ['Angular', 'React', 'Vue'];
// Con then
const getData1 = () => {
    inquirer
        .prompt([
        {
            name: 'username',
            message: 'Tell me your name',
            type: 'input',
        },
        {
            name: 'age',
            message: 'Tell me your age',
            type: 'number',
        },
        {
            name: 'course',
            message: 'Choose a course',
            type: 'list',
            choices: courses,
        },
        {
            name: 'multicourse',
            message: 'Choose courses',
            type: 'checkbox',
            choices: courses,
        },
        {
            name: 'isaccepted',
            message: 'Accept terms',
            type: 'confirm',
        },
    ])
        .then((useranswers) => {
        if (isNaN(useranswers.age))
            return getData();
        // Object.values(useranswers).forEach((value) => console.log(value));
        /* Object.entries(useranswers).forEach((entries) =>
          console.log(entries[0], entries[1])
        ); */
        Object.entries(useranswers).forEach(([k, v]) => console.log(k.toUpperCase(), v));
        /*
        Console.log(useranswers.username);
        console.log(useranswers.age);
        console.log(useranswers.course);
        */
    });
};
// Con async
const getData = async () => {
    const answers = await inquirer.prompt([
        {
            name: 'username',
            message: 'Tell me your name',
            type: 'input',
        },
        {
            name: 'age',
            message: 'Tell me your age',
            type: 'number',
        },
        {
            name: 'course',
            message: 'Choose a course',
            type: 'list',
            choices: courses,
        },
        {
            name: 'multicourse',
            message: 'Choose courses',
            type: 'checkbox',
            choices: courses,
        },
        {
            name: 'isaccepted',
            message: 'Accept terms',
            type: 'confirm',
        },
    ]);
    if (isNaN(answers.age)) {
        getData();
    }
    else {
        Object.entries(answers).forEach(([k, v]) => console.log(k.toUpperCase(), v));
    }
};
getData();
