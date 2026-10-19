// Reusable quiz component.
// Markup:
//   <div class="quiz">
//     <div class="q" data-answer="2">            <!-- 1-based index of correct option -->
//       <div class="prompt">Question…</div>
//       <div class="opts"><button class="opt">…</button>…</div>
//       <p class="why">Explanation shown after answering.</p>
//     </div>
//     <p class="quiz-score"></p>
//   </div>
// One attempt per question: retrieval only counts if it's a real attempt.
document.querySelectorAll(".quiz").forEach((quiz) => {
  const questions = [...quiz.querySelectorAll(".q")];
  const scoreEl = quiz.querySelector(".quiz-score");
  let answered = 0;
  let correct = 0;

  const updateScore = () => {
    if (!scoreEl) return;
    scoreEl.textContent =
      answered === questions.length
        ? `You got ${correct} of ${questions.length}. ${
            correct === questions.length
              ? "Solid recall."
              : "Re-read the sections behind the ones you missed, then try the exercise."
          }`
        : `${answered} of ${questions.length} answered.`;
  };

  questions.forEach((q) => {
    const answer = Number(q.dataset.answer);
    const opts = [...q.querySelectorAll("button.opt")];
    opts.forEach((btn, i) => {
      btn.type = "button";
      btn.addEventListener("click", () => {
        const isRight = i + 1 === answer;
        btn.classList.add(isRight ? "correct" : "wrong");
        opts[answer - 1].classList.add("correct");
        opts.forEach((b) => (b.disabled = true));
        q.classList.add("answered");
        answered += 1;
        if (isRight) correct += 1;
        updateScore();
      });
    });
  });
  updateScore();
});
