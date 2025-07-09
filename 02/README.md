# 🧪 Esercizi Extra di TypeScript

Una raccolta di esercizi pratici su TypeScript puro, per consolidare i concetti chiave: tipi, funzioni, oggetti, classi e inferenza dei tipi.

---

## 🧠 Tipi di base e Funzioni

- [1] Crea una funzione `moltiplica` che accetta due numeri e restituisce il risultato.
- [2] Crea una funzione `inverti` che accetta una stringa e la restituisce al contrario.
- [3] Scrivi una funzione `isPari` che accetta un numero e restituisce un booleano.

---

## 📚 Array, Tuple e Union Types

- [4] Crea un array di stringhe con i nomi di 5 animali.
- [5] Crea una tupla `[string, number]` che rappresenta un prodotto con nome e prezzo.
- [6] Crea una funzione `stampaValore` che accetta un parametro `number | string` e stampa un messaggio diverso per ogni tipo.

---

## 🔐 Interfacce e Oggetti

- [7] Crea un'interfaccia `Libro` con: `titolo: string`, `autore: string`, `annoPubblicazione: number`.
- [8] Crea una funzione `mostraLibro` che accetta un oggetto `Libro` e stampa una descrizione.
- [9] Crea un array di `Libro[]` e una funzione che filtra solo quelli pubblicati dopo il 2010.

---

## 🧱 Tipi Avanzati: Type Alias, Union, Literal Types

- [10] Crea un tipo `RuoloUtente = "admin" | "editor" | "viewer"`.
- [11] Crea una funzione `permessi` che accetta un `RuoloUtente` e ritorna una descrizione testuale.
- [12] Crea un tipo `Punto` per rappresentare `{ x: number, y: number }`.

---

## 🏗 Classi e OOP

- [13] Crea una classe `Contatore` con una proprietà `valore: number` e metodi `incrementa()` e `decrementa()`.
- [14] Crea una classe `Persona` con proprietà `nome`, `età`, e un metodo `saluta()` che stampa `"Ciao, sono {nome}"`.
- [15] Aggiungi alla classe `Persona` un campo `readonly id`.

---

## 🔐 Modificatori di accesso

- [16] Crea una classe `Banca` con una proprietà privata `saldo` e metodi `deposita()` e `preleva()`.
- [17] Proteggi `saldo` in modo che non sia accessibile direttamente dall’esterno.
- [18] Aggiungi un metodo pubblico `visualizzaSaldo()`.

---

## 🧠 Type Inference e controllo dei tipi

- [19] Crea una variabile `isOnline = true` e prova ad assegnarle una stringa. Verifica l’errore.
- [20] Crea una funzione `descrizione(valore: unknown)` che usa `typeof` per restituire informazioni sul tipo ricevuto (`string`, `number`, `boolean`...).

---

## 🔁 Funzioni con parametri opzionali e default

- [21] Crea una funzione `saluta(nome: string, titolo?: string)` che stampa `"Ciao, [titolo] nome"`.
- [22] Crea una funzione `potenza(base: number, esponente: number = 2)` che restituisce `base` elevato a `esponente`.

---

## 🧪 Oggetti come parametri

- [23] Crea un'interfaccia `Studente` con `nome: string`, `voto: number`, `presente: boolean`.
- [24] Crea una funzione `valutaStudente` che accetta uno `Studente` e restituisce una stringa descrittiva.

---
