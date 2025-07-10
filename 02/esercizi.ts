// Tipi di base e Funzioni

// Esercizio 1 (Crea una funzione moltiplica che accetta due numeri e restituisce il risultato.)
{
  function moltiplica(n1: number, n2: number): number {
    return n1 * n2;
  }
  console.log(moltiplica(2, 2));
}

// Esercizio 2 (Crea una funzione inverti che accetta una stringa e la restituisce al contrario.)
{
  function inverti(a: string): string {
    return a.split("").reverse().join("");
  }
  console.log(inverti("Fata"));
}

// Esercizio 3 (Scrivi una funzione isPari che accetta un numero e restituisce un booleano.)

{
  function isPari(n: number): boolean {
    return n % 2 === 0;
  }
  console.log(isPari(4));
}

// Array, Tuple e Union Types

// Esercizio 4 (Crea un array di stringhe con i nomi di 5 animali.)
{
  const animali: string[] = ["gatto", "cane", "coniglio", "capra", "pinguino"];
  console.log(animali);
}

// Esercizio 5 (Crea una tupla [string, number] che rappresenta un prodotto con nome e prezzo.)
{
  const prodotto: [string, number] = ["Jeans", 29.99];
  console.log(prodotto);
}

// Esercizio 6 (Crea una funzione stampaValore che accetta un parametro number | string e stampa un messaggio diverso per ogni tipo.)
{
  function stampaValore(val: number | string): void {
    if (typeof val === "number") {
      console.log(`il valore è il numero ${val}`);
    } else if (typeof val === "string") {
      console.log(`il valore è la seguente stringa: ${val}`);
    }
  }
  stampaValore(3);
  stampaValore("mobiletto");
}

// Interfacce e Oggetti

// Esercizio 7 (Crea un'interfaccia Libro con: titolo: string, autore: string, annoPubblicazione: number.)
{
  interface Libro {
    titolo: string;
    autore: string;
    annoPubblicazione: number;
  }
  // Esercizio 8 (Crea una funzione mostraLibro che accetta un oggetto Libro e stampa una descrizione.)
  function mostraLibro(libro: Libro): void {
    console.log(
      `Il libro "${libro.titolo}" scritto da ${libro.autore} è stato pubblicato nel ${libro.annoPubblicazione}`
    );
  }
  mostraLibro({
    titolo: "Forget me not",
    autore: "Julie Soto",
    annoPubblicazione: 2023,
  });
  // Esercizio 9 (Crea un array di Libro[] e una funzione che filtra solo quelli pubblicati dopo il 2010.)

  const libri: Libro[] = [
    { titolo: "Il nome della rosa", autore: "Eco", annoPubblicazione: 1980 },
    { titolo: "La strada", autore: "McCarthy", annoPubblicazione: 2006 },
    { titolo: "Forget me not", autore: "Julie Soto", annoPubblicazione: 2023 },
  ];
  const recenti = libri.filter((e) => e.annoPubblicazione > 2010);
  console.log(recenti);
}

//  Tipi Avanzati: Type Alias, Union, Literal Types

// Esercizio 10

// Esercizio 11

// Esercizio 12

// Classi e OOP

// Esercizio 13

// Esercizio 14

// Esercizio 15

// Modificatori di accesso

// Esercizio 16

// Esercizio 17

// Esercizio 18

// Type Inference e controllo dei tipi

// Esercizio 19

// Esercizio 20

// Funzioni con parametri opzionali e default

// Esercizio 21

// Esercizio 22

// Oggetti come parametri

// Esercizio 23

// Esercizio 24
