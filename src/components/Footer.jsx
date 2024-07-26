//import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container footer__caption">
                    <section className="contacto">
                        <h3 className="title__footer">Contacto</h3>
                        <div className="footer__info">
                            <p className="footer__text">Servicios de asesoría en ti, ciberseguridad, cursos de ti, auditorias iso27001, desarrollo de software.</p>
                        </div>
                        <div className="socialmedia">
                            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="h"><i className='bx bxl-instagram' ></i></a>
                            <a href="#"><i className='bx bxl-tiktok' ></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                        </div>
                    </section>
                    <section className="redes">
                        <div className="redes__footer">
                            <h4 className="redes">Redes</h4>
                        </div>
                        <div className="redes__phone">
                            <p className="number">+57 3004599050</p>
                        </div>
                        <div className="mail__footer">
                            <p className="mail">info@rivaltec.net</p>
                        </div>
                    </section>
                    <section className="get-email">
                        <h4 className="title__footer title__footer-modifier">Menú</h4>
                        <form className="newsletter newsletter--modifier">
                            <p className="footer__text--modifier">Correo electrónico para contacto empresarial</p>
                            <input type="text" className="newsletter__input" placeholder="Ingresa tu email"></input>
                            <input type="submit" className="newsletter__submit" value="Enviar mensaje de contacto"></input>
                        </form>
                    </section>
                    <div className="copy">
                        <p className="copyright">&copy; All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;