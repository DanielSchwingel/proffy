import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/29637107?s=460&u=c20ae44c847e324063433bc1deb24c285c0c7acf&v=4" alt="Imagem do Professor" />
                <div>
                    <strong>Daniel Filipe Schwingel</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Estusiasta das melhores tecnologias de química avançada.
                <br />
                <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;