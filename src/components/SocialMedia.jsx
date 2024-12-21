
export default function SocialMedia({row}) {
    return <div class={`${!row?"position-fixed flex-column":"px-sm-0"} flex-wrap justify-content-start align-items-center bg-main d-sm-flex d-inline-flex gap-3 py-2 px-3 rounded-start`} style={{"right": 0, "bottom": "25%"}}>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=61566424687958" class="link-second fs-3">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/academiavitaa/" class="link-second fs-3">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a target="_blank" href="https://www.tiktok.com/@academiavitaa" class="link-second fs-3">
        <i class="fa-brands fa-tiktok"></i>
        </a>
        <a target="_blank" href="https://wa.me/51908935924" class="link-second fs-3">
        <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>
}