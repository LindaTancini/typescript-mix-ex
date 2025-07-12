# 🧱 Esercizi Extra – OOP & Modificatori di Accesso in TypeScript

Esercizi focalizzati su:

- Classi, ereditarietà, override
- Modificatori: `public`, `private`, `protected`, `readonly`

---

## 🧠 Sezione 1 – OOP (Classi, Ereditarietà, Metodi)

### 🧪 Esercizio 1 – Gestione animali

Crea una classe `Animale` con:

- proprietà: `nome: string`
- metodo: `descrizione(): string`  
  → ritorna `"Animale di nome [nome]"`

Estendi `Animale` in una classe `Uccello`:

- aggiunge proprietà `vola: boolean`
- sovrascrive `descrizione()` per restituire:  
  `"Uccello di nome [nome], vola: true/false"`

---

### 🧪 Esercizio 2 – Sistema scolastico

Crea una classe `Persona` con:

- `nome: string`, `cognome: string`
- metodo `saluta(): void`  
  → stampa `"Ciao, sono [nome] [cognome]"`

Estendi con:

- classe `Studente` → aggiunge `matricola: string`
- classe `Insegnante` → aggiunge `materia: string`

Crea una funzione `presenta(p: Persona): void` che chiama `p.saluta()`.

---

### 🧪 Esercizio 3 – Biblioteca

Crea una classe `Libro` con:

- `titolo: string`, `autore: string`, `disponibile: boolean`
- metodo `prendiInPrestito()` → imposta `disponibile = false`
- metodo `restituisci()` → imposta `disponibile = true`

Crea una classe `Biblioteca` che contiene un array di `Libro[]` e un metodo `elencaLibri()` per stamparli.

---

## 🔐 Sezione 2 – Modificatori di accesso

### 🧪 Esercizio 4 – Conto bancario avanzato

Crea una classe `ContoBancario` con:

- `private saldo: number`
- `readonly iban: string`
- metodo `deposita(importo: number)`
- metodo `preleva(importo: number)`  
  → sottrae solo se il saldo è sufficiente
- metodo `getSaldo(): number`  
  → restituisce il saldo

⚠️ Prova ad accedere a `saldo` o modificare `iban` da fuori.

---

### 🧪 Esercizio 5 – Gerarchia utenti

Crea una classe `Utente` con:

- `protected nome: string`
- metodo `identifica(): string`  
  → `"Utente: [nome]"`

Estendi con:

- classe `Moderatore` → ha un metodo `modera()`, accede a `nome`
- classe `SuperAdmin` → sovrascrive `identifica()` con `"SuperAdmin: [nome]"`

⚠️ Prova ad accedere a `nome` da fuori → dovrebbe dare errore.

---

### 🧪 Esercizio 6 – Registro accessi (Porta)

Crea una classe `Porta` con:

- `private aperta: boolean`
- metodo `apri()` → imposta `aperta = true`
- metodo `chiudi()` → imposta `aperta = false`
- metodo `stato(): string` → `"aperta"` o `"chiusa"`

⚠️ Verifica che non sia possibile leggere `aperta` dall’esterno.

---
