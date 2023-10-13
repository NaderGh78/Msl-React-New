import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const Company = [
    {
        id: 1,
        name: "Home"
    },
    {
        id: 2,
        name: "About Us"
    }, {
        id: 3,
        name: "Services"
    },
    {
        id: 4,
        name: "Contact Us"
    }
];

export const Reach = [
    {
        id: 1,
        //  icon: "fa-sharp fa-solid fa-location-dot",
        icon: faMapMarkerAlt,
        details: "Downtown,Saifi Village,Beirut,Lebanon."
    },
    {
        id: 2,
        //icon: "fa-solid fa-phone",
        icon: faPhone,
        details: " +961 1990199"
    }, {
        id: 3,
        //icon: "fa-brands fa-whatsapp",
        icon: faWhatsapp,
        details: " +961 3 666716"
    }, {
        id: 4,
        // icon: "fa-regular fa-envelope",
        icon: faEnvelope,
        details: "lb@msl.network"
    }
];

