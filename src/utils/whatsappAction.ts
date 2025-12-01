import constants from "../constants"

export const handleWhatsAppAction = () => {
    const contact = constants.COMPANY_CONTACT.split("-").join("")
    const phoneNumber = constants.COMPANY_COUNTRY + contact;
    const message = "Halo, saya tertarik untuk bekerja sama.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};