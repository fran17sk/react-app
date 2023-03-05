class Email {
    constructor(Name,correo,celular,mensaje){
        this.Name=Name
        this.correo=correo
        this.celular=celular
        this.mensaje=mensaje
    }

    almacenarMails(this){
        const email = JSON.parse(localStorage.getItem('mails'))||[]
        email.push(this) 
        const AlmacenarMails = localStorage.setItem('mails',JSON.stringify(email))
    }
}