document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");

    const statsContainer = document.querySelector(".stats-container");

    const easyProgressCircle = document.querySelector(".easy-progress.circle")
;
    const mediumProgressCircle = document.querySelector(".medium-progress.circle")
;
    const hardProgressCircle = document.querySelector(".hard-progress.circle")
;

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    
    const cardStatsContainer = document.querySelector(".stats-cards");

    //return true or false based on regular expression
    function validateUsename(username) {
        if(username.trim() ===""){
            alert("Username should not be empty");
            return false;
        }  
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }

    function updateProgress(circle, solved, total){
        const percent = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${percent}%`)
    }

    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`
        
        const h = document.getElementById("user-heading");
        h.innerText=`User: ${username}`;

        try{

            document.getElementById("error-msg")?.remove();
            statsContainer.style.display = "block";

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;


            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch the User Details");
            }

            
            const data = await response.json();


            if (data.status === "error") {
                throw new Error("User not found");
            }


            console.log("Loggin data: ", data);
            console.log("Easy Qs solved: ", data.easySolved);
            console.log("Medium Qs solved: ", data.mediumSolved);
            console.log("Hard Qs solved: ", data.hardSolved);

            easyLabel.textContent = `${data.easySolved} / ${data.totalEasy}`;
            mediumLabel.textContent = `${data.mediumSolved} / ${data.totalMedium}`;
            hardLabel.textContent = `${data.hardSolved} / ${data.totalHard}`;

            updateProgress(easyProgressCircle, data.easySolved, data.totalEasy);
            updateProgress(mediumProgressCircle, data.mediumSolved, data.totalMedium);
            updateProgress(hardProgressCircle, data.hardSolved, data.totalHard);


        }
        catch(error){
            statsContainer.style.display = "none";

            // remove old error
            document.getElementById("error-msg")?.remove();

            // show error text
            statsContainer.insertAdjacentHTML(
                "afterend",
                `<p id="error-msg" style="color:red; margin-top:10px; text-align:center;">
                    User not available
                </p>`)
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
            usernameInput.value = "";
        }
    }

    function handleSearch() {
        const username = usernameInput.value;
        if (validateUsename(username)) {
            fetchUserDetails(username);
        }
    }

    searchButton.addEventListener("click", handleSearch);

    usernameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    });

});