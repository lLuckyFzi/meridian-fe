export const handleWhatsAppAction = () => {
    const phoneNumber = "+6281947788882";
    const message = "Halo, saya tertarik untuk bekerja sama.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};