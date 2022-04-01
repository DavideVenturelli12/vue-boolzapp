//debug 
console.log('JS OK!');

/*
MILESTONE 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e
  dall’interlocutore(bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare
  nome e immagine di ogni contatto [X]

MILESTONE 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v -for, visualizzare tutti i
  messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato [X]

MILESTONE 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
  “enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
  un “ok” come risposta, che apparirà dopo 1 secondo.

MILESTONE 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
  contatti il cui nome contiene le lettere inserite(es, Marco, Matteo Martina -> Scrivo
  “mar” rimangono solo Marco e Martina
*/

const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '16:15',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '16:30',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '16:30',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '16:35',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '10:10',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '10:20',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '16:15',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '15:50',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const app = new Vue({
    el: '#boolzapp',
    data: {
        contacts,
        selectedContact: contacts[0],
        newMessage: '',
        contactSearched: ''
    },
    methods: {
        imgURLAvatar(imgContact) {
            return `img/avatar${imgContact.avatar}.jpg`
        },

        showLastMessage(contact) {
            const messages = contact.messages;

            messages.forEach((message, index) => {
            });
            const lastMessage = messages[messages.length - 1].message;
            //console.log(lastMessage);
            return lastMessage;
        },

        showLastDate(contact) {
            const messages = contact.messages;

            messages.forEach((date, index) => {
            });
            const lastDate = messages[messages.length - 1].date;
            return lastDate;
        },

        selectContact(contact) {
            this.selectedContact = contact;
        },

        addNewMessage(item) {
            //console.log(item);
            const nuovoMessaggio = {
                date: this.currentTime(),
                message: this.newMessage,
                status: 'sent'
            }
            if (this.newMessage.length > 0) {
                item.push(nuovoMessaggio);
                this.newMessage = '';
                setTimeout(this.answerToMessage, 1000);
            }
        },

        answerToMessage() {
            const answer = {
                date: this.currentTime(),
                message: 'Ok, va bene',
                status: 'received'
            }
            this.contacts[0].messages.push(answer);
        },

        currentTime() {
            let today = new Date();
            let hh = String(today.getHours()).padStart(2, '0');
            let mm = String(today.getMinutes()).padStart(2, '0');
            return today = hh + ':' + mm;
        }
    }
})
