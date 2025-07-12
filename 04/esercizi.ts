// OOP

// Esercizio 1 – Gestione animali
{
  class Animale {
    nome: string;

    constructor(nome: string) {
      this.nome = nome;
    }
    descrizione(): string {
      return `Animale di nome ${this.nome}`;
    }
  }
  class Uccello extends Animale {
    vola: boolean;

    constructor(vola: boolean, nome: string) {
      super(nome);
      this.vola = vola;
    }

    descrizione(): string {
      return `L'uccello di nome ${this.nome}, vola: ${this.vola}`;
    }
  }
  const animale1 = new Uccello(true, "Ulisse");
  console.log(animale1.descrizione());
}

// Esercizio 2 – Sistema scolastico
{
  class Persona {
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string) {
      this.nome = nome;
      this.cognome = cognome;
    }

    saluta(): void {
      console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    }
  }

  class Studente extends Persona {
    matricola: string;

    constructor(nome: string, cognome: string, matricola: string) {
      super(nome, cognome);
      this.matricola = matricola;
    }
  }

  class Insegnante extends Persona {
    materia: string;

    constructor(nome: string, cognome: string, materia: string) {
      super(nome, cognome);
      this.materia = materia;
    }
  }
  function presenta(p: Persona): void {
    p.saluta();

    // Type narrowing con instanceof
    if (p instanceof Studente) {
      console.log(`Sono uno studente con matricola: ${p.matricola}`);
    } else if (p instanceof Insegnante) {
      console.log(`Insegno la materia: ${p.materia}`);
    }
  }
  const persona1 = new Persona("Linda", "Tancini");
  const studente1 = new Studente("Marco", "Rossi", "S123");
  const insegnante1 = new Insegnante("Anna", "Bianchi", "Matematica");

  presenta(persona1);
  presenta(studente1);
  presenta(insegnante1);
}

// Esercizio 3 – Biblioteca
{
  class Libro {
    titolo: string;
    autore: string;
    disponibile: boolean;

    constructor(titolo: string, autore: string, disponibile: boolean = true) {
      this.titolo = titolo;
      this.autore = autore;
      this.disponibile = disponibile;
    }

    prendiInPrestito(): void {
      this.disponibile = false;
    }

    restituisci(): void {
      this.disponibile = true;
    }
  }

  class Biblioteca {
    libri: Libro[];

    constructor() {
      this.libri = [
        new Libro("1984", "George Orwell"),
        new Libro("Orgoglio e pregiudizio", "Jane Austen", false),
      ];
    }

    elencaLibri(): void {
      console.log("Libri in biblioteca:");
      this.libri.forEach((libro, i) => {
        const stato = libro.disponibile ? "Disponibile" : "Non disponibile";
        console.log(
          `${i + 1}. "${libro.titolo}" di ${libro.autore} - ${stato}`
        );
      });
    }
  }

  const biblioteca = new Biblioteca();
  biblioteca.elencaLibri();
}

// Modificatori di accesso

// Esercizio 4 – Conto bancario avanzato

// Esercizio 5 – Gerarchia utenti

// Esercizio 6 – Registro accessi (Porta)
