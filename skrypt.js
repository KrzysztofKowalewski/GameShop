function dodajdokoszyka(tytul, cena){
    const tresc = tytul + ": " + cena
    const element_koszyka = document.createElement("p")
    const zawartosc = document.createTextNode(tresc)
    element_koszyka.appendChild(zawartosc)
    const dododania = document.getElementById("koszyczek")
    dododania.appendChild(element_koszyka)
    alert("Dodano do koszyka!")
}

function wyszukaj(){
    const nazwy = ["Breaking Lego","Thief simulator","Minecraft 2","Cyberpunk 2077","Martwa Wyspa 2", "Umierające światło","Borderlands 2","Stardew Valley", "Uciekinierzy",]
    const ceny = ["42,69 zł","249,99 zł", "100 zł", "199,99 zł","349,99 zł","49,99 zł", "150 zł","99,99 zł","19,99 zł"]
    const adresy = ["lego.jpg","fifa23.png","terraria.jpg","cajberpank.jpg","EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b.jpg", "dying.jpg","border.jpg", "Stardew-Vallley-10-tips.jpg","TheEscapists_Newsfeed Post-2560x1440-587a8d844cab1246b3253f2f98fab8a7.jpg"]
    const tresc = document.getElementById("wyszukiwarka").value
    const childy = []

    const do_wstawiania = document.getElementById("gry")
    do_wstawiania.innerHTML = ""
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')
    const br6 = document.createElement('br')

    for(i=0;i<(nazwy.length);i++){
        if(tresc == false){
            alert("Pole nie może być puste!")
            location.reload()
            break
        }
        if(nazwy[i].includes(tresc) == true){
            const element = document.createElement('div');
            element.setAttribute("id", "gra");
            do_wstawiania.appendChild(element)
            const tytul = document.createElement('tytulgry')
            const zawartosc = document.createTextNode(nazwy[i])
            tytul.appendChild(zawartosc)
            childy.push(tytul)
            childy.push(br)
            childy.push(br1)
            const zdjecie = document.createElement('img')
            zdjecie.setAttribute('src', adresy[i])
            childy.push(zdjecie)
            childy.push(br2)
            const cena = document.createElement('cena')
            const cena_zawartosc = document.createTextNode(ceny[i])
            cena.appendChild(cena_zawartosc)
            childy.push(cena)
            childy.push(br3)
            childy.push(br4)
            const kup = document.createElement('kup')
            const kup_zawartosc = document.createTextNode("Dodaj do koszyka")
            kup.appendChild(kup_zawartosc)
            kup.setAttribute('onclick', `dodajdokoszyka('${nazwy[i]}','${ceny[i]}')`)
            childy.push(kup)
            childy.forEach(child => element.appendChild(child))
        }
    }

}