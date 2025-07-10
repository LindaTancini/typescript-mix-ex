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

// Esercizio 10 (Crea un tipo RuoloUtente = "admin" | "editor" | "viewer")
{
  type RuoloUtente = "admin" | "editor" | "viewer";
  // Esercizio 11 (Crea una funzione permessi che accetta un RuoloUtente e ritorna una descrizione testuale.)
  function permessi(ruolo: RuoloUtente): string {
    switch (ruolo) {
      case "admin":
        return "Accesso completo";
      case "editor":
        return "Accesso in scrittura";
      case "viewer":
        return "Sola lettura";
    }
  }
  console.log(permessi("admin"));
  console.log(permessi("editor"));
  console.log(permessi("viewer"));
}

// Esercizio 12 (Crea un tipo Punto per rappresentare { x: number, y: number }.)
{
  type Punto = { x: number; y: number };
  const cordinate: Punto = { x: 12, y: 19 };
}

// Classi e OOP

// Esercizio 13 (Crea una classe Contatore con una proprietà valore: number e metodi incrementa() e decrementa().)
{
  class Contatore {
    valore: number = 0;

    incrementa() {
      this.valore++;
    }

    decrementa() {
      this.valore--;
    }
  }
  // Creazione di un'istanza della classe
  const mioContatore = new Contatore();

  // Uso dei metodi sull'istanza
  mioContatore.incrementa();
  mioContatore.incrementa();
  mioContatore.decrementa();

  console.log(mioContatore.valore);
}

// Esercizio 14 (Crea una classe Persona con proprietà nome, età, e un metodo saluta() che stampa "Ciao, sono {nome}".)
{
  class Persona {
    nome: string;
    eta: number;

    constructor(nome: string, eta: number) {
      this.nome = nome;
      this.eta = eta;
    }

    saluta(): void {
      console.log(`Ciao, sono ${this.nome} e ho ${this.eta} anni`);
    }
  }
  const p1 = new Persona("Linda", 29);
  p1.saluta();
}

// Esercizio 15 (Aggiungi alla classe Persona un campo readonly id.)
{
  class Persona {
    nome: string;
    eta: number;
    readonly id: number;

    constructor(nome: string, eta: number, id: number) {
      this.nome = nome;
      this.eta = eta;
      this.id = id;
    }
  }
}

// Modificatori di accesso

// Esercizio 16 (Crea una classe Banca con una proprietà privata saldo e metodi deposita() e preleva().)
{
  class Banca {
    // Esercizio 17 (Proteggi saldo in modo che non sia accessibile direttamente dall’esterno.)
    private saldo: number = 100;

    deposita(): void {
      this.saldo++;
    }

    preleva(): void {
      this.saldo--;
    }
    // Esercizio 18 ( Aggiungi un metodo pubblico visualizzaSaldo().)
    visualizzaSaldo(): void {
      console.log(`Il tuo saldo attuale è : ${this.saldo}`);
    }
  }

  const conto = new Banca();
  conto.visualizzaSaldo();

  conto.deposita();
  conto.visualizzaSaldo();

  conto.preleva();
  conto.visualizzaSaldo();
}

// Type Inference e controllo dei tipi

// Esercizio 19 (Crea una variabile isOnline = true e prova ad assegnarle una stringa. Verifica l’errore.)
{
  let isOnline = true;
  // isOnline = "si"; // l'errore - > Type 'string' is not assignable to type 'boolean'
}

// Esercizio 20 (Crea una funzione descrizione(valore: unknown) che usa typeof per restituire informazioni sul tipo ricevuto (string, number, boolean...).)
{
  function descrizione(valore: unknown): void {
    if (typeof valore === "string") {
      console.log("sono una stringa");
    } else if (typeof valore === "number") {
      console.log("sono un numero");
    } else if (typeof valore === "boolean") {
      console.log("sono un valore booleano");
    } else {
      console.log("tipo non riconosciuto");
    }
  }
  descrizione("rana");
  descrizione(7);
  descrizione(true);
}

// Funzioni con parametri opzionali e default

// Esercizio 21 (Crea una funzione saluta(nome: string, titolo?: string) che stampa "Ciao, [titolo] nome".)
{
  function saluta(nome: string, titolo?: string): void {
    if (titolo) {
      console.log(`Ciao , ${titolo} ${nome}`);
    } else {
      console.log(`Ciao, ${nome}`);
    }
  }
}

// Esercizio 22 (Crea una funzione potenza(base: number, esponente: number = 2) che restituisce base elevato a esponente.)
{
  function potenza(base: number, esponente: number = 2): void {
    console.log(base ** esponente);
  }
}

// Oggetti come parametri

// Esercizio 23

// Esercizio 24
