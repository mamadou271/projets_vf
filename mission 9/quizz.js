document.getElementById('submit-btn').addEventListener('click', function() {
    let score = 0;

    // Liste des réponses correctes
    const correctAnswers = {
        q1: 'd',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'a',
        q8: 'a',
        q9: 'b',
        q10: 'a'
    };

    // Vérifier les réponses sélectionnées
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Afficher le score
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Vous avez obtenu ${score} sur 10.`;

    // Afficher les boutons "Afficher la correction" et "Corriger"
    document.getElementById('show-correction-btn').style.display = 'inline-block';
    document.getElementById('correct-btn').style.display = 'inline-block';
});

// Afficher la correction
document.getElementById('show-correction-btn').addEventListener('click', function() {
    document.getElementById('correction').style.display = 'block';
});

// Corriger le quiz (décoche les réponses)
document.getElementById('correct-btn').addEventListener('click', function() {
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            selectedOption.checked = false;  // Décocher la réponse
        }
    }

    // Masquer la correction et les boutons de correction
    document.getElementById('correction').style.display = 'none';
    document.getElementById('show-correction-btn').style.display = 'none';
    document.getElementById('correct-btn').style.display = 'none';
});
