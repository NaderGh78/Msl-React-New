import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const DataCounter = [
    {
        id: 1,
        number: "1,273",
        desc: "Delivered Packages"
    },
    {
        id: 2,
        number: "473,754",
        desc: "KM Per Year"
    },
    {
        id: 3,
        number: "25",
        desc: "Years of Experience"
    },
    {
        id: 4,
        number: "719",
        desc: "Happy Clients"
    },
    {
        id: 5,
        number: "4,234",
        desc: "Tons of Goods"
    }
];

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

export const FooterSocialLinks = [
    {
        id: 1,
        icon: faFacebookF
    },
    {
        id: 2,
        icon: faTwitter
    }, {
        id: 3,
        icon: faInstagram
    }
];

export const SliderImg = [
    {
        id: 1,
        src: './assets/images/About/slider-imgs/slide1.jpg'
    },
    {
        id: 2,
        src: './assets/images/About/slider-imgs/slide2.jpg'
    }, {
        id: 3,
        src: './assets/images/About/slider-imgs/slide3.jpg'
    }
];

export const AllCards = [
    {
        id: 1,
        src: './assets/images/About/cards-imgs/mission.jpg',
        title: "OUR MISSION",
        textTop: "Your Shipping Needs. Our Solutions.",
        descText: "Our mission at MSL is to grant solutions for all customers’ shipping needs & expertly coordinates the transportation of goods using multi-modal modes of transport to ensure on time delivery."
    },
    {
        id: 2,
        src: './assets/images/About/cards-imgs/vision.jpg',
        title: "OUR VISION",
        textTop: "More than Shipping.",
        descText: "At MSL, our vision is to make shipping as flexible as possible so that the customer will enjoy the experience of moving cargo."
    }, {
        id: 3,
        src: './assets/images/About/cards-imgs/goal.jpg',
        title: "EXPANDING GOAL",
        textTop: "The main target at MSL is to be one of the world’s leaders in shipping & logistics services, and to make positive change in worldwide market by utilizing new technologies & developing our own strategies."
    }
];

export const ServicesData = [
    {
        id: 1,
        title: "OCEAN FREIGHT",
        src: './assets/images/Service/ocean.jpg',
        subTitle: "Beyond the ocean.",
        text: "MSL can arrange transportation of full container loads (FCL), Less than container shipments (LCL) or large over dimensional cargo to and from any destination or origin in the world. Together with our international partners, we shall ensure a smooth transportation with best freight rates. Our sea freight services include:",
        listContent: [
            "FCL and LCL shipments",
            "Door-to-Door,Port-to-Door & Port-to-Port shipments",
            "Transhipments/Cross-bookings",
            "Customs clearance and documentation"
        ]
    },
    {
        id: 2,
        title: "AIR FREIGHT",
        src: './assets/images/Service/air.jpg',
        subTitle: "When speed matters.",
        text: "MSL understands customer’s request for air freight shipment when it comes to faster transit time. Thus, we offer international flight connections between any destinations in the world. to handle any type of cargo and deliver it with care to its receiver. Our air freight services include:",
        listContent: [
            "Air freight imports and exports",
            "Door-to-door, Door-to-Airport, Airport-to-Airport shipments",
            "Express shipments",
            "Customs clearance services"
        ]
    },
    {
        id: 3,
        title: "LAND TRANSPORT",
        src: './assets/images/Service/land.jpg',
        subTitle: "Fast inland connection.",
        text: "Local or Regional Land freight is also one of MSL’s offered services. Whether it’s a pallet load or a full trailer, we can accommodate your requirements and meet your budget. Our road freight services include:",
        listContent: [
            "FTL and LTL shipments within Europe",
            "Customs clearance and documentation",
            "Transport insurance"
        ]
    },
    {
        id: 4,
        title: "CUSTOMS CLEARANCE",
        src: './assets/images/Service/customs.jpg',
        subTitle: "Let it be handled by MSL.",
        text: "Our main target in MSL is to satisfy customer’s needs and facilitate his/her shipping experience. For that, MSL offers customs clearance beside its freight services in both origin & destination, in which your shipment will be followed by our side from A to Z."
    }
]; 