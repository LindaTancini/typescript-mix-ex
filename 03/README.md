# 🧱 Esercizi Avanzati TypeScript – Tutto in un unico file Markdown

Esercizi mirati su:

- ✅ Tipi Avanzati (`type alias`, `union`, `literal types`)
- ✅ Classi e OOP
- ✅ Modificatori di accesso (`public`, `private`, `protected`, `readonly`)

---

## 🔶 1. Tipi Avanzati

### Esercizio 1.1 – Stato ordine

Crea un **type alias** chiamato `StatoOrdine` che può essere solo:

- `"in attesa"`
- `"spedito"`
- `"consegnato"`
- `"annullato"`

Scrivi una funzione `aggiornaStato(id: number, stato: StatoOrdine): void` che stampa:

📦 Ordine [id] aggiornato a [stato]

---

### Esercizio 1.2 – Risultato

Crea un type alias `Risultato` che può essere:

- `string`
- `number`

Scrivi una funzione `stampaRisultato(r: Risultato): void` che stampa messaggi diversi a seconda del tipo ricevuto.

---

### Esercizio 1.3 – Contatto

Crea un tipo `Contatto` che può essere:

- `{ tipo: "email", valore: string }`
- `{ tipo: "telefono", valore: number }`

Scrivi una funzione `mostraContatto(c: Contatto)` che stampa:

- 📧 Email: valore
- 📞 Telefono: valore

---

## 🔷 2. Classi e OOP

### Esercizio 2.1 – Classe Veicolo

Crea una classe `Veicolo` con proprietà:

- `marca: string`
- `modello: string`

Aggiungi un metodo `descrivi()` che restituisce:  
"Veicolo: marca modello"

---

### Esercizio 2.2 – Classe Auto (estende Veicolo)

Crea una classe `Auto` che estende `Veicolo`.

Aggiungi la proprietà `numeroPorte: number`.

Sovrascrivi `descrivi()` per includere anche il numero di porte, es:  
"Veicolo: Fiat Panda con 4 porte"

---

### Esercizio 2.3 – Animale, Cane, Gatto

Crea una classe `Animale` con un metodo `verso()` che stampa:  
"verso generico"

Estendi la classe in:

- `Cane`: stampa "bau"
- `Gatto`: stampa "miao"

---

## 🔐 3. Modificatori di accesso

### Esercizio 3.1 – Conto Corrente

Crea una classe `ContoCorrente` con:

- `private saldo: number`
- `readonly numeroConto: string`

Il costruttore deve accettare saldo iniziale e numero conto.

Aggiungi i metodi:

- `deposita(importo: number)`
- `preleva(importo: number)`
- `mostraSaldo(): number`

⚠️ Prova a modificare `numeroConto` al di fuori del costruttore → TypeScript deve darti errore.

---

### Esercizio 3.2 – Utente con protected

Crea una classe `Utente` con:

- `protected nome: string`

Crea una classe `Admin` che estende `Utente`.

Aggiungi un metodo `mostraPrivilegi()` che stampa "Admin: nome"

⚠️ Prova ad accedere a `nome` da fuori → TypeScript deve impedirlo.

---
