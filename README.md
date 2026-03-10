# Digitalna Prodavnica Igračaka - Prototip KVA 2026

Ovaj projekat predstavlja računarski prototip korisničkog interfejsa za veb klijentsku aplikaciju "Digitalna prodavnica igračaka". [cite_start]Projekat je realizovan kao deo semestralnog zadatka na predmetu **Klijentske veb aplikacije**[cite: 25].

## 🚀 Tehnologije
* [cite_start]**Framework:** Angular [cite: 26]
* [cite_start]**Jezik:** TypeScript (za definisanje strukture podataka i logike servisa) [cite: 25]
* [cite_start]**Arhitektura:** Simulacija pozadinske logike putem Angular servisa [cite: 35]

## 📋 Funkcionalnosti
[cite_start]Aplikacija je dizajnirana za jednog tipa korisnika – **kupca** [cite: 18] – i omogućava sledeće:

* [cite_start]**Pretraga i Katalog:** Pregled predefinisanog skupa od minimum 10 igračaka uz mogućnost filtriranja po nazivu, tipu, uzrastu, ciljnoj grupi, ceni i recenzijama[cite: 6, 7, 9].
* [cite_start]**Sistem Rezervacija:** Dodavanje igračaka u "Korpu rezervacija" uz automatski obračun ukupne cene[cite: 8, 11].
* [cite_start]**Upravljanje Korpom:** * Modifikacija podataka za igračke u statusu `rezervisano`[cite: 15].
    * [cite_start]Brisanje igračaka koje su u statusu `pristiglo`[cite: 15].
* [cite_start]**Recenzije i Ocene:** Pregled iskustava drugih korisnika i mogućnost ocenjivanja isključivo igračaka koje su prethodno rezervisane i imaju status `pristiglo`[cite: 16, 17, 20].
* [cite_start]**Profil Korisnika:** Registracija i prijava korisnika, kao i izmena ličnih podataka (ime, kontakt, omiljene vrste igračaka)[cite: 18, 19, 21].

## 🏗️ Implementacija (Simulacija Backend-a)
Sva logika aplikacije je simulirana na klijentskoj strani:
* [cite_start]**Interfejsi:** Definišu strogu strukturu podataka za igračke i korisničke profile[cite: 36].
* [cite_start]**Servisi:** Upravljaju stanjima aplikacije (čitanje, upis, izmena i brisanje podataka tokom trajanja sesije)[cite: 36].

## 📖 Uputstvo za pokretanje
Da biste pokrenuli projekat lokalno, osigurajte da imate instaliran [Node.js](https://nodejs.org/) i [Angular CLI](https://angular.io/cli).

1. Klonirajte repozitorijum:
   ```bash
   git clone [https://github.com/jelena-pavkovic/digitalna-prodavnica-igracaka.git](https://github.com/jelena-pavkovic/digitalna-prodavnica-igracaka.git)