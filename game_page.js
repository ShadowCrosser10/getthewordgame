player_1_name = localStorage.getItem("Player 1's username:");
player_2_name = localStorage.getItem("Player 2's username:");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1").innerHTML = player_1_name+": ";
document.getElementById("player_2").innerHTML = player_2_name+": ";

document.getElementById("score_player1").innerHTML = player_1_score;
document.getElementById("score_player2").innerHTML = player_2_score; 

document.getElementById("question_turn").innerHTML = "Question Turn: "+player_1_name; 
document.getElementById("answer_turn").innerHTML = "Answer Turn: "+player_2_name;

function send() {
    get_word = document.getElementById("word_enter").value; 
     
    word = get_word.toLowerCase(); 

    char_1 = word.charAt(1);
    console.log(char_1); 
    
    middle_char = Math.floor(word.length/2);
    char_2 = word.charAt(middle_char);
    console.log(char_2); 

    last_char = word.length-1;
    char_3 = word.charAt(last_char); 
    console.log(char_3); 

    replaced_char_1 = word.replace(char_1, "_");
    console.log(replaced_char_1);

    replaced_char_2 = replaced_char_1.replace(char_2, "_");
    console.log(replaced_char_2);

    replaced_char_3 = replaced_char_2.replace(char_3, "_");
    console.log(replaced_char_3);

    header = "<h3>Q. "+replaced_char_3+"</h3>";
    input = "<br> Answer: <input type='text' id='answer_input'>"; 
    button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";

    div_elements = header+input+button; 
    document.getElementById("output").innerHTML = div_elements; 

    document.getElementById("word_enter").innerHTML = ""; 
}

question_turn = "player_1"; 
answer_turn = "player_2";

function check() {
    input = document.getElementById("answer_input").value;
    checked_word = input.toLowerCase();

    if(word == checked_word) {
        if(answer_turn == "player_1") {
            player_1_score = player_1_score + 1; 
            document.getElementById("score_player1").innerHTML = player_1_score; 
        }
        else {
            player_2_score = player_2_score + 1; 
            document.getElementById("score_player2").innerHTML = player_2_score; 
        }
    }

    if(question_turn == "player_1") {
        question_turn = "player_2"; 
        document.getElementById("question_turn").innerHTML = "Question Turn: "+player_2_name;
    }
    else {
        question_turn = "player_1"; 
        document.getElementById("question_turn").innerHTML = "Question Turn: "+player_1_name;
    }

    if(answer_turn == "player_1") {
        answer_turn = "player_2"; 
        document.getElementById("answer_turn").innerHTML = "Answer Turn: "+player_2_name;
    }
    else {
        answer_turn = "player_1"; 
        document.getElementById("answer_turn").innerHTML = "Answer Turn: "+player_1_name;
    }

    document.getElementById("output").innerHTML = ""; 
}