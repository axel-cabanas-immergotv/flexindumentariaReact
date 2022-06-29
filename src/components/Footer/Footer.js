import LogoImg from "../LogoImg/LogoImg";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

export default function Footer () {
    return (
        <footer className="mt-5">
            <div className="container-lg">
                <div className="footer d-flex justify-content-between">
                    <div className="footer__redes d-flex align-items-center">
                        <SocialNetworks />
                        <LogoImg/>
                    </div>
                    <div className="footer__contact col-sm-4">
                        <p className="footer__contact-title mb-1">Contactanos</p>
                        <ul>
                            <li>
                                <p><strong>Oficina:</strong> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD</p>
                            </li>
                            <li>
                                <p><strong>Tel:</strong> 01743 234500</p>
                            </li>
                            <li>
                                <p><strong>Email:</strong> flexin@support.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__aboutUs">
                            <p className="footer__aboutUs-title mb-1">Sobre nosotros</p>
                            <ul>
                                <li>
                                    <a href="#">Sobre nosotros</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                                <li>
                                    <a href="#">Terminos y condiciones</a>
                                </li>
                                <li>
                                    <a href="#">Politica de privacidad</a>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="mt-3">
                    <p className="footer__copy">&copy; Axel Cabañas</p>
                </div>
            </div>
        </footer>
    )
}