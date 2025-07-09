// Tipi di base

// Esercizio 1 (Crea variabili di tipo string, number, boolean, array, e tuple. Prova ad assegnare valori errati per osservare gli errori.)
{
  let nome: string;
  nome = "Linda";
  let eta: number;
  eta = 29;
  let isFemale: boolean;
  isFemale = true;
  const numbers: number[] = [1, 2, 3, 4]; // array
  let persona: [string, number] = ["Linda", 29]; // tuple
}
// Esercizio 2 (Scrivi una funzione saluta che accetta un parametro nome: string e ritorna "Ciao, nome".)
{
  function saluta(nome: string): string {
    return `Ciao, ${nome}`;
  }
  console.log(saluta("Linda"));
}

// Esercizio 3 (Crea una funzione calcolaSomma che accetta due numeri e restituisce la somma.)
{
  function somma(n1: number, n2: number): void {
    console.log(n1 + n2);
  }
  somma(2, 2);
}

// Interfacce e tipi personalizzati

// Esercizio 4

// Esercizio 5

// Esercizio 6

// Programmazione a Oggetti (OOP)

// Esercizio 7

// Esercizio 8

// Esercizio 9

// Type Inference e controllo dei tipi

// Esercizio 10

// Esercizio 11
