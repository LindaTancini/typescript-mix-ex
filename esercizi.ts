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

// Esercizio 4 (Crea un’interfaccia User con: id: number, name: string, e isAdmin?: boolean.)
{
  interface User {
    id: number;
    name: string;
    isAdmin?: boolean;
  }
  const user: User = { id: 123, name: "Linda", isAdmin: true };
}

// Esercizio 5 (Crea un array di utenti User[] e una funzione che filtra solo quelli con isAdmin: true.)
{
  interface User {
    id: number;
    name: string;
    isAdmin?: boolean;
  }
  const users: User[] = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie", isAdmin: false },
    { id: 4, name: "Linda", isAdmin: true },
  ];
  function getUser(userArray: User[]): User[] {
    return userArray.filter((e) => e.isAdmin === true);
  }

  const personUsers = getUser(users);
  console.log(personUsers);
}
// Esercizio 6 ( Definisci un tipo Product con: id, name, price, e usalo per creare un carrello.)
{
  type Product = { id: number; name: string; price: number };
  let cart: Product[] = [
    { id: 124, name: "Scarpe", price: 59.99 },
    { id: 125, name: "Cintura", price: 19.99 },
  ];

  function getCartTotal(cart: Product[]): number {
    return cart.reduce((total, product) => total + product.price, 0);
  }

  console.log("Totale carrello:", getCartTotal(cart).toFixed(2));
}

// Programmazione a Oggetti (OOP)

// Esercizio 7 (Crea una classe Animale con proprietà nome e metodo verso() che stampa "Suono generico".)
class Animale {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  verso(): void {
    console.log(`Sono il verso dell'animale ${this.nome}`);
  }
}
const animale1 = new Animale("Gatto");
animale1.verso();

// Esercizio 8 (Crea una classe Gatto che estende Animale e sovrascrive verso() per stampare "Miao".)

class Gatto extends Animale {
  verso(): void {
    console.log("Miao");
  }
}
const felix = new Gatto("Felix");

felix.verso();

// Esercizio 9 (Usa modificatori public, private, readonly nelle proprietà e verifica gli errori.)
{
  class Prodotto {
    public nome: string;
    private prezzo: number;
    readonly id: number;

    constructor(nome: string, prezzo: number, id: number) {
      this.nome = nome;
      this.prezzo = prezzo;
      this.id = id;
    }
    descrizioneProdotto(): void {
      console.log(`Il prezzo del prodotto ${this.nome} è di ${this.prezzo}`);
    }
  }
  const prodotto1 = new Prodotto("Maglia", 9.99, 1);
  prodotto1.descrizioneProdotto();
  console.log(prodotto1.nome);
  //console.log(prodotto1.prezzo) //essendo private non legge il valore
  console.log(prodotto1.id); // solo lettura
}

// Type Inference e controllo dei tipi

// Esercizio 10

// Esercizio 11
