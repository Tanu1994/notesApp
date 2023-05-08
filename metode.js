const square = (x) => x*x;

console.log(square(3));

const eveniment = {
    nume: 'Nunta',
    invitati: ['Mihai', 'Dragos', 'Victoria'],
    printeazaInvitati() {
        console.log(`Lista de invitati pentru ${this.nume}`)
        this.invitati.forEach((invitat) => {
            console.log(`${invitat} vine la ${this.nume}`);
        })
    }
}

eveniment.printeazaInvitati();