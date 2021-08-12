// image
localStorage.getItem('image') === null ? document.getElementById('lbl_img').src = "https://picsum.photos/id/1005/400/250" : document.getElementById('lbl_img').src = localStorage.getItem('image');
// nama
localStorage.getItem('nama') === null ? document.getElementById('lbl_name').innerHTML = "No Name" : document.getElementById('lbl_name').innerHTML = localStorage.getItem('nama');
// posisi
localStorage.getItem('posisi') === null ? document.getElementById('lbl_position').innerHTML = "No Position" : document.getElementById('lbl_position').innerHTML = localStorage.getItem('posisi');
// departemen
localStorage.getItem('departemen') === null ? document.getElementById('lbl_departement').innerHTML = "No Departemen" : document.getElementById('lbl_departement').innerHTML = localStorage.getItem('departemen');
// hobi
localStorage.getItem('hobi') === null ? document.getElementById('lbl_hoby').innerHTML = "No Hobby" : document.getElementById('lbl_hoby').innerHTML = localStorage.getItem('hobi');
// email
localStorage.getItem('email') === null ? document.getElementById('lbl_email').innerHTML = "No Email" : document.getElementById('lbl_email').innerHTML = localStorage.getItem('email');
// telepon
localStorage.getItem('telepon') === null ? document.getElementById('lbl_phone').innerHTML = "No Phone" : document.getElementById('lbl_phone').innerHTML = localStorage.getItem('telepon');

// kondisional
function changeLabel(select) {
    // sarian
    if (select.value == "sarian") {
        var image = document.getElementById('lbl_img').src = "https://lh3.googleusercontent.com/d/1K20Sf67THRhboEfBNE5-Xji0Pvzughq1=s700?authuser=0";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Ahmad Sarian";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Frontend Developer";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Nonton Film";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "syarian@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "085156261216";
        localStorage.setItem('telepon', telepon);
    }
    // astrid
    else if (select.value == "astrid") {
        var image = document.getElementById('lbl_img').src = "https://lh3.googleusercontent.com/d/1uj9V70-Zleri2fkc2fwGvMbsUaKPyjMg=s700?authuser=0";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Astrid Dewi";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Backend Developer";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Ngoding";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "astrid.dewi@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "081380216126";
        localStorage.setItem('telepon', telepon);
    }
    // alam
    else if (select.value == "alam") {
        var image = document.getElementById('lbl_img').src = "https://panel.websiteori.com/files/profile_images/_file608be36ddd623-avatar.png";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Alamsyah";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Web & SEO Coordinator";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Mancing Mania";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "alam@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "085774469007";
        localStorage.setItem('telepon', telepon);
    }
    // zalva
    else if (select.value == "zalva") {
        var image = document.getElementById('lbl_img').src = "https://picsum.photos/id/1005/400/250";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Zalva Belladonna";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Social Media Specialist";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Menyanyi";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "zalva.belladonna@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "087777006832";
        localStorage.setItem('telepon', telepon);
    }
    // renaldi
    else if (select.value == "renaldi") {
        var image = document.getElementById('lbl_img').src = "https://lh3.googleusercontent.com/d/13SdgzWYZNdg0aVqjD0Kvo-xXtD44LkJY=s700?authuser=0";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Renaldi Putra";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "SEO Strategiest";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Futsal";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "renaldi.putra@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "087886681733";
        localStorage.setItem('telepon', telepon);
    }
    // irsyad
    else if (select.value == "irsyad") {
        var image = document.getElementById('lbl_img').src = "https://picsum.photos/id/1005/400/250";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Irsyad Asy'ari";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Administrative Assistant";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Travelling";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "irsyad.asyari@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "081280393607";
        localStorage.setItem('telepon', telepon);
    }
    // zaki
    else if (select.value == "zaki") {
        var image = document.getElementById('lbl_img').src = "https://picsum.photos/id/1005/400/250";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Hauzan Muzaki";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Graphic Designer";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Hiking";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "hauzan.muzaki@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "085239386399";
        localStorage.setItem('telepon', telepon);
    }
    // alsa
    else if (select.value == "alsa") {
        var image = document.getElementById('lbl_img').src = "https://lh3.googleusercontent.com/d/1SXzgCeMVEvvMZfWwcKNb8BWNwkp4j9Sc=s700?authuser=0";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Alsa Adrimuna";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Marketing Staff";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Memasak";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "alsa.adrimuna@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "08561729566";
        localStorage.setItem('telepon', telepon);
    }
    // putra
    else if (select.value == "putra") {
        var image = document.getElementById('lbl_img').src = "https://lh3.googleusercontent.com/d/1c-3OIGxm4QIfrIfb88te595pEoDKpND8=s700?authuser=0";
        localStorage.setItem('image', image);

        var nama = document.getElementById('lbl_name').innerHTML = "Ade Tri Putra";
        localStorage.setItem('nama', nama);

        var posisi = document.getElementById('lbl_position').innerHTML = "Sales Coordinator";
        localStorage.setItem('posisi', posisi);

        var departemen = document.getElementById('lbl_departement').innerHTML = "WebsiteOri";
        localStorage.setItem('departemen', departemen);

        var hobi = document.getElementById('lbl_hoby').innerHTML = "Membaca";
        localStorage.setItem('hobi', hobi);

        var email = document.getElementById('lbl_email').innerHTML = "ade.putra@websiteori.com";
        localStorage.setItem('email', email);

        var telepon = document.getElementById('lbl_phone').innerHTML = "085693380191";
        localStorage.setItem('telepon', telepon);
    }
}