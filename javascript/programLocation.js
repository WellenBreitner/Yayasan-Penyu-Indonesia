function locationButtonOnclick(location) {

    const table = document.getElementsByClassName("location-table")[0];

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    const allButtons = document.querySelectorAll(".location-button button");
    allButtons.forEach(button => button.style.backgroundColor = "");

    const allImages = document.querySelectorAll(".program-location-img img");
    allImages.forEach(image => {
        if (image.classList.contains("sumatra-img")) {
            image.src = "assets/image/sumatra.svg";
            image.alt = "Sumatra";
        } else if (image.classList.contains("sulawesi-img")) {
            image.src = "assets/image/sulawesi.svg";
            image.alt = "Sulawesi";
        } else if (image.classList.contains("bali-img")) {
            image.src = "assets/image/bali.svg";
            image.alt = "Bali";
        }
    });


    switch (location) {
        case 'sumatra':
            let sumatraLocationData = ["1. Aceh", "2. Nias", "3. Mentawai"]
            const sumatraImageElement = document.getElementsByClassName("sumatra-img")[0];
            const sumatraButtonElement = document.getElementsByClassName(location + "-button")[0];

            sumatraImageElement.src = "assets/image/sumatraSelected.svg";
            sumatraImageElement.alt = "Sumatra selected";

            sumatraButtonElement.style.backgroundColor = "#fbf5c9";

            for (let i = 0; i < sumatraLocationData.length; i++) {
                const row = table.insertRow(i + 1)
                const cell = row.insertCell(0);
                cell.innerHTML = sumatraLocationData[i];
                cell.style.padding = ".5rem";
            }
            break;

        case 'sulawesi':
            let sulawesiLocationData = ["1. Berau"]
            const sulawesiImageElement = document.getElementsByClassName("sulawesi-img")[0];
            const sulawesiButtonElement = document.getElementsByClassName(location + "-button")[0];

            sulawesiImageElement.src = "assets/image/sulawesiSelected.svg";
            sulawesiImageElement.alt = "Sulawesi selected";

            sulawesiButtonElement.style.backgroundColor = "#fbf5c9";

            for (let i = 0; i < sulawesiLocationData.length; i++) {
                const row = table.insertRow(i + 1);
                const cell = row.insertCell(0);
                cell.innerHTML = sulawesiLocationData[i];
                cell.style.padding = ".5rem";
            }
            break;

        case 'bali':
            let baliLocationData = ["1. Denpasar"]
            const baliImageElement = document.getElementsByClassName("bali-img")[0];
            const baliButtonElement = document.getElementsByClassName(location + "-button")[0];

            baliImageElement.src = "assets/image/baliSelected.svg";
            baliImageElement.alt = "Bali selected";

            baliButtonElement.style.backgroundColor = "#fbf5c9";

            for (let i = 0; i < baliLocationData.length; i++) {
                const row = table.insertRow(i + 1);
                const cell = row.insertCell(0);
                cell.innerHTML = baliLocationData[i];
                cell.style.padding = ".5rem";
            }
            break;




    }
}

function dialogButton(open, programName) {
    if (open == true) {
        const dialog = document.getElementsByClassName("program-dialog")[0];
        dialog.showModal();;
    } else {
        const dialog = document.getElementsByClassName("program-dialog")[0];
        dialog.close();
    }

}

window.addEventListener("DOMContentLoaded", () => {
    locationButtonOnclick('sumatra');
});