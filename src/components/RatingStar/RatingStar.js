import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function RatingStar () {
    return (
        <div className="banner__rating">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                </li>
            </ul>
        </div>
    )
}