import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function SocialNetworks () {
    return (
        <div className="social__networks">
            <ul className="d-flex">
                <li>
                    <a href='https://github.com/axelcabanas' target='_blank'>
                        <FontAwesomeIcon className="icon__github" icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/18.aksel' target='_blank'>
                        <FontAwesomeIcon className="icon__instagram" icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/axelcabanas/' target='_blank'>
                        <FontAwesomeIcon className="icon__linkedin" icon={faLinkedinIn} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
