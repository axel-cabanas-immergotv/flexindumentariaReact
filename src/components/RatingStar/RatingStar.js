import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function Star () {
    return (
        <div className="banner__rating">
            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                </li>
            </ul>
        </div>
    )
}