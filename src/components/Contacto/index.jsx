import { useState } from 'react'
import img from '../../assets/img/portadacontact.jpg'
import { ToastContainer, toast } from 'react-toastify';
import { db } from '../Firebase'
import { collection , addDoc , serverTimestamp} from "firebase/firestore";

const Contacto = () => {

    const [nameComplete,setnameComplete]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [msj,setmsj]=useState('')
    const aux = 140
    const [caracter,setCaracter]=useState(aux)
    const letras =['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','z','x','c','v','b','n','m']
    const clearForm = () => {
        document.getElementById('Form').reset()
    }
    const SendData = (e) => {
        e.preventDefault()
        if(nameComplete.length>0 && email.length>0 && phone.length>0 && msj.length>0){
            const orden = {
                name: nameComplete ,
                email:email,
                phone:phone,
                msj:msj,
                date:serverTimestamp()
            }
        const msjCollection = collection(db,'mensjasesClientes')
            const consulta = addDoc(msjCollection,orden)
            consulta
            .then((res)=>{
                toast.success(`Mensaje ${res.id} recibido con exito!!!`)
                clearForm()
            })
            .catch((err)=>{
                toast.error(`Error ${err} al generar Orden`)
            })
        }else{
            toast.error('Por favor rellena el formulario correctamente...')
        }
    }
    const setname = (e) => {
        setnameComplete(e.target.value)
    }
    const obtenermail = (e) => {
        setemail(e.target.value)
    }
    const obtenerphone = (e) => {
        setphone(e.target.value)
    }
    const guardarmsj = (e) => {
        setmsj(e.target.value)
        setCaracter(aux-e.target.value.length)
    }
    const msjValidation = (e) => {
        if(caracter<=0||e.key in letras){
            e.preventDefault()
        }else{
            return
        }
    }
    return (
        <>
        <div className="portadaContact carou"><img src={img} alt="" className="portadaContact"/></div>
        <section className="ContactoFlex">
            <div className="contactosContact">
                <h4 className="titleContact">Contactanos</h4>
                <div className="redContact">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp iconosContact" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg></a>
                    <a href=""><h5>3874756154</h5></a>
                </div>
                <div className="redContact">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-inbound iconosContact" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg></a>
                    <a href=""><h5>4932213</h5></a>
                </div>
                <div className="redContact">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope iconosContact" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg></a>
                    <a href=""><h5>palitomaciasstore@gmail.com</h5></a>
                </div>
                <div className="redContact">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt iconosContact" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg></a>
                    <a href=""><h5>Avenida General Arenales 2801</h5></a>
                </div>
            </div>
            <div className="formContact" onSubmit={SendData}>
                <form className="form"  id='Form'>
                    <label>Nombre y apellido</label>
                    <input type="text" id="name_contact" name='name' className="formularioContact" onChange={setname}/>
                    <label>Correo electronico</label>
                    <input type="email" id="e-mail_contact" name='email'  className="formularioContact" onChange={obtenermail}/>
                    <label>Celular</label>
                    <input type="tel" id="cell_contact" name='cell' placeholder="ej:..3874756154" className="formularioContact" onChange={obtenerphone}/>
                    <label>Mensaje</label>
                    <input type="text" name="msj" id="mensj" className="formularioContact mensj" onKeyDown={msjValidation} onChange={guardarmsj}/>
                    <p>{`Disponible: ${caracter} caracteres`}</p>
                    <button className="btn-enviar rounded-bottom" type='submit'>ENVIAR</button>
                </form>
            </div>

        </section>
        </>
    )
}

export {Contacto}