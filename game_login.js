function next() {
    player_1 = document.getElementById("input_1").value;
    player_2 = document.getElementById("input_2").value;

    localStorage.setItem("Player 1's username:", player_1);
    localStorage.setItem("Player 2's username:", player_2);

    window.location = "game_page.html";
}