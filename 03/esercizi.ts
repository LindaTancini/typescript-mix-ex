// Tipi Avanzati

// Esercizio 1.1 – Stato ordine
{
  type StatoOrdine = "in attesa" | "spedito" | "consegnato" | "annullato";
  function aggiornaStato(id: number, stato: StatoOrdine): void {
    if (stato === "in attesa") {
      console.log("L'ordine è in fase di attesa");
    } else if (stato === "spedito") {
      console.log("L'ordine è stato spedito");
    } else if (stato === "consegnato") {
      console.log("L'ordine è stato consegnato");
    } else if (stato === "annullato") {
      console.log("L'ordine è stato annullato");
    }
  }
  const id = 101;
  aggiornaStato(id, "spedito");
}

// Esercizio 1.2 – Risultato
{
  type Risultato = string | number;
  function stampaRisultato(r: Risultato): void {
    if (typeof r === "string") {
      console.log("Sono una stringa");
    } else if (typeof r === "number") {
      console.log("Sono un numero");
    }
  }
  stampaRisultato("ciao");
  stampaRisultato(8);
}

// Esercizio 1.3 – Contatto
{
  type Contatto =
    | { tipo: "email"; valore: string }
    | { tipo: "telefono"; valore: number };
  function mostraContatto(contatto: Contatto): void {
    if (contatto.tipo === "email") {
      console.log("Email:", contatto.valore);
    } else if (contatto.tipo === "telefono") {
      console.log("Telefono:", contatto.valore);
    }
  }
  mostraContatto({ tipo: "email", valore: "utente@example.com" });
  mostraContatto({ tipo: "telefono", valore: 1234567890 });
}

// Classi e OOP

{
  class Veicolo {
    marca: string;
    modello: string;

    constructor(marca: string, modello: string) {
      this.marca = marca;
      this.modello = modello;
    }

    descrivi(): void {
      console.log("Veicolo:", this.marca, this.modello);
    }
  }

  const veicolo = new Veicolo("Fiat", "Panda");
  veicolo.descrivi();

  class Auto extends Veicolo {
    numeroPorte: number;

    constructor(marca: string, modello: string, numeroPorte: number) {
      super(marca, modello);
      this.numeroPorte = numeroPorte;
    }

    descrivi(): void {
      super.descrivi();
      console.log("Numero porte:", this.numeroPorte);
    }
  }

  const macchina = new Auto("Fiat", "Panda", 5);
  macchina.descrivi();
}

// Esercizio 2.3 – Animale, Cane, Gatto
{
  class Animale {
    nome: string;
    constructor(nome: string) {
      this.nome = nome;
    }
    verso(): void {
      console.log(this.nome, "fa il verso");
    }
  }
  class Gatto extends Animale {
    verso(): void {
      console.log("Miao");
    }
  }
  class Cane extends Animale {
    verso(): void {
      console.log("Bau");
    }
  }
  const felix = new Gatto("Felix");
  felix.verso();
  const luna = new Cane("Luna");
  luna.verso();
}

// Modificatori di accesso

// Esercizio 3.1 – Conto Corrente

// Esercizio 3.2 – Utente con protected
