function locationButtonOnclick(location) {

    const table = document.getElementsByClassName("location-table")[0];
    const tableHeader = document.getElementsByClassName("table-head")[0];

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    const allButtons = document.querySelectorAll(".location-button button");
    allButtons.forEach(button => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });


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
            const sumatraImageElement = document.getElementsByClassName("location-img")[0];
            const sumatraButtonElement = document.getElementsByClassName(location + "-button")[0];

            sumatraImageElement.src = "assets/image/6.svg";
            sumatraImageElement.alt = "Sumatra selected";

            sumatraButtonElement.style.backgroundColor = "#1f2c3e";
            sumatraButtonElement.style.color = "white";

            for (let i = 0; i < sumatraLocationData.length; i++) {
                const row = table.insertRow(i + 1)
                const cell = row.insertCell(0);
                cell.innerHTML = sumatraLocationData[i];
                cell.style.padding = ".5rem";
            }

            tableHeader.style.backgroundColor = '#1f2c3e';
            break;

        case 'sulawesi':
            let sulawesiLocationData = ["1. Berau"]
            const sulawesiImageElement = document.getElementsByClassName("location-img")[0];
            const sulawesiButtonElement = document.getElementsByClassName(location + "-button")[0];

            sulawesiImageElement.src = "assets/image/7.svg";
            sulawesiImageElement.alt = "Sulawesi selected";

            sulawesiButtonElement.style.backgroundColor = "#1f2c3e";
            sulawesiButtonElement.style.color = "white";

            for (let i = 0; i < sulawesiLocationData.length; i++) {
                const row = table.insertRow(i + 1);
                const cell = row.insertCell(0);
                cell.innerHTML = sulawesiLocationData[i];
                cell.style.padding = ".5rem";
            }
            tableHeader.style.backgroundColor = '#1f2c3e';
            break;

        case 'bali':
            let baliLocationData = ["1. Denpasar"]
            const baliImageElement = document.getElementsByClassName("location-img")[0];
            const baliButtonElement = document.getElementsByClassName(location + "-button")[0];

            baliImageElement.src = "assets/image/8.svg";
            baliImageElement.alt = "Bali selected";

            baliButtonElement.style.backgroundColor = "#1f2c3e";
            baliButtonElement.style.color = "white";

            for (let i = 0; i < baliLocationData.length; i++) {
                const row = table.insertRow(i + 1);
                const cell = row.insertCell(0);
                cell.innerHTML = baliLocationData[i];
                cell.style.padding = ".5rem";
            }
            tableHeader.style.backgroundColor = '#1f2c3e';
            break;
    }
}

function dialogButton(open, programName) {
    const dialog = document.getElementsByClassName("program-dialog")[0];
    const title = document.getElementsByClassName("title-of-each-program")[0];
    const description = document.getElementsByClassName("program-description")[0];
    const image = document.getElementsByClassName("program-image")[0];
    const programList = {
        'perlindungan': `
      YPI berupaya mencegah ancaman langsung terhadap penyu, seperti perburuan dan gangguan manusia. 
      
      Untuk meningkatkan keberhasilan penetasan, sarang-sarang yang berada di lokasi berisiko dipindahkan ke tempat perlindungan yang lebih aman. Setelah menetas, tukik dibantu untuk segera kembali ke laut.
      
      Pembersihan pantai secara berkala dilakukan untuk memastikan lingkungan yang aman dan bebas hambatan bagi penyu dewasa maupun tukik.
      
      Komitmen YPI berfokus pada pendekatan perlindungan di habitat alami penyu, karena kami percaya bahwa alam telah menyediakan kondisi terbaik yang dapat mendukung keberlangsungan hidup mereka.
        `,

        'edukasi': `
      Pengetahuan adalah langkah awal untuk perubahan besar. 
      
      Meningkatkan kesadaran pelestarian penyu dilakukan melalui berbagai kegiatan, mulai dari kunjungan sekolah hingga sosialisasi dan pelatihan untuk menciptakan agen perubahan.
        `,

        'monitoring': `
      Program ini dilakukan untuk memastikan aksi kami tetap relevan dengan kondisi dan permasalahan yang ada. 
      
      Selain mempelajari spesiesnya, kami juga melakukan pemantauan perdagangan ilegal produk berbahan penyu.
        `,

        'pemberdayaan': `
      Kami percaya bahwa pelestarian penyu harus melibatkan pemberdayaan masyarakat. 
      
      Melalui workshop dan pelatihan, YPI mengajak masyarakat untuk menemukan alternatif ekonomi tanpa mengeksploitasi penyu.
        `
    }

    switch (programName) {
        case 'perlindungan': {
            title.innerHTML = "Perlindungan penyu dan habitatnya";
            image.src = "assets/image/perlindungan-penyu-dan-habitatnya-img.jpg";
            image.alt = "Program perlindungan";
            description.innerHTML = programList.perlindungan;
            break
        }

        case 'edukasi': {
            title.innerHTML = "Edukasi lingkungan";
            image.src = "assets/image/edukasi-img.jpg";
            image.alt = "Program edukasi";
            description.innerHTML = programList.edukasi;
            break
        }
        case 'monitoring': {
            title.innerHTML = "Monitoring dan penelitian";
            image.src = "assets/image/monitoring-dan-penelitian.jpg";
            image.alt = "Program monitoring";
            description.innerHTML = programList.monitoring;
            break
        }
        case 'pemberdayaan': {
            title.innerHTML = "pendampingan dan pemberdayaan";
            image.src = "assets/image/pemberdayaan-img.jpg";
            image.alt = "Program penelitian";
            description.innerHTML = programList.pemberdayaan;
            break
        }
    }


    if (open == true) {
        dialog.showModal();;
    } else {
        dialog.close();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    locationButtonOnclick('sumatra');
});