# Digitalna Prodavnica Igračaka - Prototip KVA 2026

Ovaj projekat predstavlja računarski prototip korisničkog interfejsa za veb klijentsku aplikaciju "Digitalna prodavnica igračaka". Projekat je realizovan kao deo semestralnog zadatka na predmetu **Klijentske veb aplikacije**.

## 🚀 Tehnologije
* **Framework:** Angular 
* **Jezik:** TypeScript (za definisanje strukture podataka i logike servisa) 
* **Arhitektura:** Simulacija pozadinske logike putem Angular servisa 

## 📋 Funkcionalnosti
Aplikacija je dizajnirana za jednog tipa korisnika – **kupca** – i omogućava sledeće:

* **Pretraga i Katalog:** Pregled predefinisanog skupa od minimum 10 igračaka uz mogućnost filtriranja po nazivu, tipu, uzrastu, ciljnoj grupi i ceni.
* **Sistem Rezervacija:** Dodavanje igračaka u "Korpu rezervacija" uz automatski obračun ukupne cene.
* **Upravljanje Korpom:** 
    * Modifikacija podataka za igračke u statusu `rezervisano`.
    * Brisanje igračaka koje su u statusu `pristiglo`.
* **Recenzije i Ocene:** Pregled iskustava drugih korisnika i mogućnost ocenjivanja isključivo igračaka koje su prethodno rezervisane i imaju status `pristiglo`.
* **Profil Korisnika:** Registracija i prijava korisnika, kao i izmena ličnih podataka (ime, kontakt, omiljene vrste igračaka).

## 🏗️ Implementacija (Simulacija Backend-a)
Sva logika aplikacije je simulirana na klijentskoj strani:
* **Interfejsi:** Definišu strogu strukturu podataka za igračke i korisničke profile.
* **Servisi:** Upravljaju stanjima aplikacije (čitanje, upis, izmena i brisanje podataka tokom trajanja sesije).
