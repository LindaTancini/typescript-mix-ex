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

// Esercizio 2.1 – Classe Veicolo

// Esercizio 2.2 – Classe Auto (estende Veicolo)

// Esercizio 2.3 – Animale, Cane, Gatto

// Modificatori di accesso

// Esercizio 3.1 – Conto Corrente

// Esercizio 3.2 – Utente con protected
