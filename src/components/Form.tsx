import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Para marcar uma nova data para o evento - Tecboard',
        eventName: '',
        eventDate: '',
        eventTheme: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {name, email, subject, eventName, eventDate, eventTheme} = formData;
        const recEmail = 'andressagss_21@outlook.com';

        const mailToLink = `mailto:${recEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: Olá, Tecboard.\n\nGostaria de marcar meu evento "${eventName}" no dia ${eventDate} com o tema "${eventTheme}". \n\nObrigada.\n\n${name}`)}`;
    
        window.location.href = mailToLink;
    }

    return (
        <div>
            <form className="flex justify-center flex-col gap-3 my-8 mx-auto bg-components py-8 px-7 rounded-2xl w-[384px] max-w-[90%]" action="" onSubmit={handleSubmit}>
                <h2 className="font-bold text-2xl">Preencha para criar um evento: </h2>

                <fieldset className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="eventName">Nome do seu evento:</label>
                    <input className="rounded-lg w-[100%] border border-amber-50 p-1.5" type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required/>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="date">Data do evento </label>
                    <input className="p-1.5 border border-amber-50 rounded-lg w-[100%] " type="text" id="event" name="eventDate" value={formData.eventDate} onChange={handleChange} required/>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="eventTheme">Tema do evento</label>
                    <input className="p-1.5 border border-amber-50 rounded-lg w-[100%] " type="text" id="eventTheme" name="eventTheme" value={formData.eventTheme} onChange={handleChange} required/>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="name">Seu nome: </label>
                    <input className="p-1.5 border border-amber-50 rounded-lg w-[100%] " type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                </fieldset>
                
                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="email">Seu E-mail:</label>
                    <input className="p-1.5 border border-amber-50 rounded-lg w-[100%] " type="text" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                </fieldset>

                <button className="rounded-lg bg-primary p-2 text-zinc-950 font-bold mt-4" type="submit">
                    Agendar evento
                </button>
            </form>
        </div>
    )
}