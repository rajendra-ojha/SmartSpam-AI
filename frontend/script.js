async function predictSpam() {

    const numLinks =
        document.getElementById("num_links").value;

    const numWords =
        document.getElementById("num_words").value;

    const numSpecialChars =
        document.getElementById(
            "num_special_chars"
        ).value;

    const spamKeywords =
        document.getElementById(
            "has_spammy_keywords"
        ).value;


    // Check inputs

    if (
        numLinks === "" ||
        numWords === "" ||
        numSpecialChars === ""
    ) {

        alert(
            "Please fill all the fields."
        );

        return;
    }


    // Show loading

    const loading =
        document.getElementById(
            "loading"
        );

    const result =
        document.getElementById(
            "result"
        );


    loading.style.display =
        "block";

    result.style.display =
        "none";


    try {

        // Send request to FastAPI

        const response =
            await fetch(
                `/predict?` +
                `num_links=${numLinks}` +
                `&num_words=${numWords}` +
                `&num_special_chars=${numSpecialChars}` +
                `&has_spammy_keywords=${spamKeywords}`,
                {
                    method: "POST"
                }
            );


        // Convert response to JSON

        const data =
            await response.json();


        // Hide loading

        loading.style.display =
            "none";


        // Show result

        result.style.display =
            "flex";


        const resultIcon =
            document.getElementById(
                "result-icon"
            );

        const resultTitle =
            document.getElementById(
                "result-title"
            );

        const resultText =
            document.getElementById(
                "result-text"
            );


        // SPAM

        if (
            data.prediction === "SPAM"
        ) {

            result.style.background =
                "#fff0f0";


            resultIcon.style.background =
                "#ffdede";


            resultIcon.innerHTML =
                "🚨";


            resultTitle.innerText =
                "SPAM DETECTED";


            resultTitle.style.color =
                "#e53935";


            resultText.innerText =
                "Warning! This message appears to contain spam characteristics.";

        }


        // NOT SPAM

        else {

            result.style.background =
                "#edfff6";


            resultIcon.style.background =
                "#d4f8e6";


            resultIcon.innerHTML =
                "✓";


            resultTitle.innerText =
                "NOT SPAM";


            resultTitle.style.color =
                "#159957";


            resultText.innerText =
                "Good news! This message appears to be safe.";

        }

    }


    catch (error) {

        loading.style.display =
            "none";


        alert(
            "Could not connect to FastAPI. Make sure spam_app.py is running."
        );


        console.error(error);

    }

}