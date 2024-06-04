# Chocolaterie
All source code for "La Chocolaterie" website
# Git Cheatsheet
**NB**: Si presuppone che git sia stato configurato correttamente con le credenziali del proprio account GitHub.
### Comandi di configurazione
```bash
git init
```
Il comando *git init* inizializza in una cartella un repository locale.

```bash
git clone [link https repository]
```
Il comando *git clone* clona il repository salvato su GitHub, o su qualsiasi altro servizio di hosting, nel repository locale
### Comandi essenziali
```bash
git commit -a -m ""
```
Il comando *git commit* viene utilizzato per fare un "commit" dopo aver fatto modifiche al codice.
Gli "attributes" comunemente utilizzati sono *-a*, che include nel commit tutti i file, e *-m*, permette di scrivere un messaggio allegato al commit ed è obbligatorio.

```bash
git add --all
```
Il comando *git add* aggiunge al repository locale tutte le cartelle figlie al repository, è importante usarlo quando si creano nuove cartelle o nuovi file da aggiungere al commit.
L'attribute *--all* aggiunge al repository locale tutte le cartelle e i file creati all'interno della cartella del repository locale.

```bash
git revert c4eed444448d8e970f799997e652463f812f0ad6
```
Il comando *git revert* è utile quando si fanno casini: esso porta il repository al commit specificato dall'*hash* (ottenibile eseguendo il comando *git log*), creando un nuovo commit.

```bash
git log
```
Il comando *git log* permette di visualizzare gli ultimi commit, questo è un esempio di esecuzione del comando:
```bash
git log
commit c4eed444448d8e970f799997e652463f812f0ad6 (HEAD -> main, origin/main, origin/HEAD) #questo numero è l'hash del commit, utile nel comando git revert
Author: Pako3549 <62575316+Pako3549@users.noreply.github.com>
Date:   Wed May 8 15:01:02 2024 +0200

    Revert "Feat: Added most recent Index.html file"

    Fix: reverted to latest stable commit

```
### Comandi di interazione repository locale <--> repository remoto
```bash
git push
```
il comando *git push* carica su GitHub, o sul servizio di hosting scelto, i commit del repository locale.

**IMPORTANTE: *MAI* USARE L'ATTRIBUTE *--FORCE!!***

```bash
git pull
```
Il comando *git pull* serve ad aggiungere le modifiche del repository remoto al repository locale.
