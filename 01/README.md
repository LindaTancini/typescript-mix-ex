# 🧪 Esercizi su TypeScript

Esercizi pratici basati sui concetti visti fino adesso di Typescript, comprendendo un mix di tutto vesto sino ora. Gli esercizi sono divisi per argomento, con difficoltà crescente.

---

## 🧠 1. Tipi di base

**Obiettivo**: Imparare la tipizzazione statica di variabili e funzioni.

- [1] Crea variabili di tipo `string`, `number`, `boolean`, `array`, e `tuple`. Prova ad assegnare valori errati per osservare gli errori.
- [2] Scrivi una funzione `saluta` che accetta un parametro `nome: string` e ritorna `"Ciao, nome"`.
- [3] Crea una funzione `calcolaSomma` che accetta due numeri e restituisce la somma.

---

## 🔐 2. Interfacce e tipi personalizzati

**Obiettivo**: Usare `interface` e `type` per strutturare oggetti.

- [4] Crea un’interfaccia `User` con: `id: number`, `name: string`, e `isAdmin?: boolean`.
- [5] Crea un array di utenti `User[]` e una funzione che filtra solo quelli con `isAdmin: true`.
- [6] Definisci un tipo `Product` con: `id`, `name`, `price`, e usalo per creare un carrello.

---

## ⚙ 3. Programmazione a Oggetti (OOP)

**Obiettivo**: Utilizzare classi, ereditarietà e modificatori di accesso.

- [7] Crea una classe `Animale` con proprietà `nome` e metodo `verso()` che stampa `"Suono generico"`.
- [8] Crea una classe `Gatto` che estende `Animale` e sovrascrive `verso()` per stampare `"Miao"`.
- [9] Usa modificatori `public`, `private`, `readonly` nelle proprietà e verifica gli errori.

---

## 🧠 4. Type Inference e controllo dei tipi

**Obiettivo**: Capire come TypeScript deduce i tipi e come gestire i tipi sconosciuti.

- [10] Crea una variabile senza tipo esplicito, poi prova ad assegnarle un valore incompatibile.
- [11] Crea una funzione `stampaLunghezza(valore: unknown): string` che usa `typeof` o `instanceof` per restituire info basata sul tipo.

---
