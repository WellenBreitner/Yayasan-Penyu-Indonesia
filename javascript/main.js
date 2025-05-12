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

            sumatraImageElement.src = "assets/image/sumatra.webp";
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

            sulawesiImageElement.src = "assets/image/sulawesi.webp";
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

            baliImageElement.src = "assets/image/bali.webp";
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

function dialogButton(open, blogName) {
    const dialog = document.getElementById("dialog");
    const title = document.getElementsByClassName("dialog-title")[0];
    const description = document.getElementsByClassName("dialog-description")[0];
    const image = document.getElementsByClassName("dialog-image")[0];
    const closeBtn = document.getElementById('closeDialog');

    const newsList = [
        {
            title: "Perdagangan Ilegal Produk Penyu Masih Marak di Marketplace Populer!",
            content: `\nMeskipun penyu dilindungi hukum, perdagangan produk berbahan penyu masih terjadi di marketplace digital seperti Shopee dan Tokopedia.Peraturan Pemerintah No. 7 Tahun 1999 dan Undang-Undang No. 5 Tahun 1990 mengatur perlindungan penyu dengan ancaman pidana penjara hingga 5 tahun dan/atau denda Rp 100 juta.Investigasi online YPI pada November 2024 menemukan 105 iklan aktif produk berbahan penyu dari 81 penjual di 38 kota/kabupaten, dengan total penjualan 20.884 pcs dan keuntungan lebih dari Rp 138 juta.Produk ilegal meliputi umpan pancing, perhiasan (gelang, cincin, liontin), minyak urut, pajangan, hingga keris.\n
YPI mengajak masyarakat untuk membantu:
1. Cari produk ilegal menggunakan kata kunci unik (misal: Pnyu, Pendok).
2. Klik produk dan laporkan menggunakan fitur “Report”.
3. Ajak teman untuk ikut melapor.
Satu laporan darimu bisa menyelamatkan penyu!`
        },
        {
            title: "Anak Sekolah Bersimulasi Menjadi Ranger Penjaga Penyu di Bali",
            content: `\nPada 16–17 Desember 2024, YPI mengadakan edukasi penyu bersama 100 siswa kelas 1 hingga 3 dari SD Aruna Vidya. Tujuannya untuk mengembangkan metode edukasi tanpa mengganggu siklus alami penyu.Kegiatan dibuka dengan pengenalan siklus hidup penyu melalui nyanyian, dilanjutkan dengan penjelasan dasar tentang penyu. Setiap anak mendapat jurnal aktivitas.Anak-anak mengikuti dongeng interaktif dan simulasi menjadi ranger. Mereka belajar mengidentifikasi jejak, merelokasi sarang replika, dan menjaga dari pencuri fiktif. Mereka juga melakukan aksi nyata berupa bersih pantai.Kimi, maskot penyu sisik YPI, hadir di akhir acara dan menjawab pertanyaan dari anak-anak. Para siswa menyampaikan komitmen menjaga kelestarian penyu.Terima kasih kepada 11 relawan luar biasa: Dinda, Abella, Ratu, Istya, Kina, Sony, Gita, Ika, Sita, Rama, dan Rahmah.YPI berharap pengalaman ini menumbuhkan kepedulian anak-anak terhadap penyu dan habitatnya.`
        },
        {
            title: "Etika Mengintip Penyu Bertelur",
            content: `\nJakarta – Yayasan Penyu Indonesia (YPI) berbagi tips kepada traveler yang ingin menyaksikan aktivitas penyu dan tukik di tepi pantai.\n
Indonesia memiliki enam dari tujuh jenis penyu di dunia, yakni penyu hijau (Chelonia mydas), penyu sisik (Eretmochelys imbricata), penyu lekang (Lepidochelys olivacea), penyu belimbing (Dermochelys coriacea), penyu pipih (Natator depressus), dan penyu tempayan (Caretta caretta).Keenam jenis penyu tersebut dilindungi oleh Peraturan Pemerintah (PP) Nomor 7 Tahun 1999 tentang Pengawetan Jenis Tumbuhan dan Satwa. Segala bentuk perdagangan penyu, baik dalam keadaan hidup, mati, maupun bagian tubuhnya, dilarang. Undang-undang konservasi juga mengatur sanksi bagi pelanggarnya.Jumlah penyu yang sedikit harus menghadapi banyak ancaman, termasuk dari manusia. Operator wisata yang tidak peduli terhadap konservasi dan wisatawan yang tidak tertib termasuk dalam ancaman tersebut.Ketua Yayasan Penyu Indonesia, Bayu Sandi, menyatakan bahwa wisata penyu tetap bisa dilakukan dengan syarat tertentu. Traveler harus didampingi oleh ranger terlatih dan mematuhi aturan konservasi.\n
Berikut adalah tips dari YPI untuk mengamati penyu bertelur:
1. Jangan menggunakan flash untuk memotret, gunakan lampu merah.
2. Jaga jarak minimal 10 meter dari penyu.
3. Tonton penyu dari belakang, jangan di depan penyu.
4. Jangan menyentuh penyu atau tukik.
5. Hindari berpesta atau membuat keributan di area konservasi.`
        },

        {
            title: "Fakta, Tukik adalah Bayi Penyu yang Mandiri!",
            content: `\nTukik adalah bayi penyu yang menunjukkan kemandirian luar biasa sejak lahir. Mereka tidak ditemani induknya saat menetas.Tukik menuju laut dengan mengikuti cahaya cakrawala. Namun, cahaya buatan dari pembangunan di pantai bisa membuat mereka tersesat.Jika tukik berjalan ke arah yang salah, bantu arahkan ke laut, tapi jangan dipelihara karena bisa mengganggu proses imprinting.\n
Berikut 6 fakta penting tentang tukik:
1. Perjalanan hidup tukik dimulai dari perjuangan menuju laut dan menghadapi predator.
2. Tukik mandiri sejak lahir tanpa asuhan induk.
3. Tukik bernavigasi menggunakan cahaya dan medan magnet bumi.
4. Tantangan berat di laut menunggu mereka, termasuk predator besar.
5. Tukik dan penyu dewasa penting untuk keseimbangan ekosistem laut.
6. Banyak program konservasi fokus melindungi tukik dan habitatnya.
YPI berkomitmen menjaga tukik di habitat alaminya untuk mewujudkan ekosistem laut yang lestari.`
        }
    ];


    switch (blogName) {
        case 'produk': {
            title.innerHTML = newsList[0].title.replace(/\n/g, "<br>");
            description.innerHTML = newsList[0].content.replace(/\n/g, "<br>");
            image.src = "assets/image/produk_news.jpg"
            break
        }
        case 'sekolah': {
            title.innerHTML = newsList[1].title.replace(/\n/g, "<br>");
            description.innerHTML = newsList[1].content.replace(/\n/g, "<br>");
            image.src = "assets/image/anak_sekolah_news.webp"
            break
        }
        case 'etika': {
            title.innerHTML = newsList[2].title.replace(/\n/g, "<br>");
            description.innerHTML = newsList[2].content.replace(/\n/g, "<br>");
            image.src = "assets/image/etika_img.jpg"
            break
        }
        case 'fakta': {
            title.innerHTML = newsList[3].title.replace(/\n/g, "<br>");
            description.innerHTML = newsList[3].content.replace(/\n/g, "<br>");
            image.src = "assets/image/tukik.webp"
            break
        }
    }

    if (open == true) {
        dialog.showModal();;
    } else {
        dialog.close();
    }

    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}

let IsBurgerIconOpen = false
function toggleDropdown() {
    IsBurgerIconOpen = !IsBurgerIconOpen;
    const dropdown = document.getElementById('navDropdown');

    if (IsBurgerIconOpen) {
        dropdown.style.display = "flex";
    }
    else {
        dropdown.style.display = "none";
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            dropdown.style.display = 'none';
            isDropdownOpen = false;
        }
    });
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'id'
    }, 'google_translate_element');
}

(function loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);
})();

function getPageFromLink(link) {
    const home = document.getElementById("campaignPage");
    const about = document.getElementById("aboutPage");
    const donate = document.getElementById("donatePage");
    const volunteer = document.getElementById("volunteerPage");
    switch (link) {
        case 'campaignPage':
            home.style.display = "unset";
            about.style.display = "none";
            donate.style.display = "none";
            volunteer.style.display = "none";
            break;
        case 'aboutPage':
            home.style.display = "none";
            about.style.display = "unset";
            donate.style.display = "none";
            volunteer.style.display = "none";
            break;
        case 'donatePage':
            home.style.display = "none";
            about.style.display = "none";
            donate.style.display = "unset";
            volunteer.style.display = "none";
            break;
        case 'volunteerPage':
            home.style.display = "none";
            about.style.display = "none";
            donate.style.display = "none";
            volunteer.style.display = "unset";
            break;
    }
}

function getDonateData() {
    document.getElementById('donationForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const country = document.getElementById('country').value;
        let message = document.getElementById('message').value.trim();
        const amount = parseInt(document.getElementById('amount').value);

        if (message === "") {
            message = "Tidak ada pesan";
        }

        console.log("Data Donasi:", {
            name, email, phone, country, message, amount
        });

        alert(`Donate Successfully \nName: ${name},\nEmail: ${email},\nPhone Number: ${phone},\nCountry: ${country},\nMessage: ${message},\nAmount: ${amount}`);

        this.reset();

    });
}

function getVolunteerRegisterData() {
    document.getElementById('volunteerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('volunteer_name').value.trim()
        const email = document.getElementById('volunteer_email').value.trim()
        const phone = document.getElementById('volunteer_phone').value.trim()
        const age = document.getElementById('volunteer_age').value.trim()
        const current_live = document.getElementById('volunteer_current_live').value.trim()

        console.log('Data Volunteer:', { name, email, phone, age, current_live })
        alert(`Register Volunteer Successfully \nName: ${name},\nEmail: ${email},\nPhone Number: ${phone},\nAge: ${age},\nCurrent Live: ${current_live}`);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    locationButtonOnclick('sumatra');
});