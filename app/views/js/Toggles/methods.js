// Method to return marked object
const markQuestion = (questionOptions, answers) => {
	let allCorrect = true;

	// Loop over each toggle option and check answer given against correct option
	const questionResults = questionOptions.map((option, questionKey) => {
		const { correctOption } = option;
		if (correctOption != answers[questionKey].currentOption) {
			allCorrect = false;
			return {
				questionKey,
				correct: false
			};
		}
		return {
			questionKey,
			correct: true
		};
	});

	return {
		allAnswersCorrect: allCorrect,
		markBreakDown: questionResults
	};
};

const randomiseInitialAnswers = questionOptions => {
	// Loop over all options and generate random current selection
	const generateRandomAnswers = () => {
		const answers = questionOptions.map((option, optionKey) => {
			return {
				optionKey,
				currentOption: Math.round(Math.random())
			};
		});

		return answers;
	};

	// Mark the answers to make sure they are not all correct on page load
	let answers = generateRandomAnswers();
	let markedAnswers = markQuestion(questionOptions, answers);

	// If all answers are correct generate a new set of random answers
	while (markedAnswers.allAnswersCorrect) {
		answers = generateRandomAnswers();
		markedAnswers = markQuestion(questionOptions, answers);
	}

	return answers;
};

export { markQuestion, randomiseInitialAnswers };
