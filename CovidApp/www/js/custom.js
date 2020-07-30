$(document).ready(function() {

    /**
     * Home load on page ready
     */
    let Start = {
        onDeviceReady: loadPage('start')
    };

    document.addEventListener("deviceready", Start.onDeviceReady, false);

});

let questions = {
    "q1": {
        "category": "basic",
        "question": "¿Tiene temperatura arriba de los 38 grados?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q2": {
        "category": "basic",
        "question": " ¿Tiene tos seca?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q3": {
        "category": "basic",
        "question": " ¿Perdida de apetito?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q4": {
        "category": "basic",
        "question": " ¿Siente fatiga?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q5": {
        "category": "basic",
        "question": " ¿Sensacion de falta de aire?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q6": {
        "category": "basic",
        "question": " ¿Congestion nasal o dolor de garganta?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q7": {
        "category": "warning",
        "question": " ¿Perdida o disminucion del olfato y del gusto?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q8": {
        "category": "warning",
        "question": " ¿Tos con esputo?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q9": {
        "category": "warning",
        "question": " ¿Dolor muscular o en articulaciones?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q10": {
        "category": "warning",
        "question": " ¿Dolor de cabeza?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q11": {
        "category": "warning",
        "question": " ¿Diarrea, nauseas y/o vomitos?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q12": {
        "category": "warning",
        "question": " ¿Picos y/o erupcion en la piel?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q13": {
        "category": "danger",
        "question": " ¿Coloracion azul en los labios y la piel? (cara y dedos)",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q14": {
        "category": "danger",
        "question": " ¿Dolor toraxico persistente?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
    "q15": {
        "category": "danger",
        "question": " ¿Pulso irregular?",
        "options": [
            {"val": 'Si'},
            {"val": 'No'}
        ]
    },
}


function loadPage(page) {

    $('#main-container').load("./pages/" + page + '.html');

}
