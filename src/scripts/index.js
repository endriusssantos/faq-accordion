const questionsAndAnswers = document.querySelectorAll(".question");

questionsAndAnswers.forEach(function (question) {
    question.addEventListener("click", () => {
        const isActive = question.classList.contains("on");

        questionsAndAnswers.forEach(removeOn => {
            removeOn.classList.remove("on");
        });

        if (!isActive) {
            question.classList.add("on");
        }
    })
})