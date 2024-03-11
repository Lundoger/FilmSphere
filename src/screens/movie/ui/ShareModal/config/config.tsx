import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "next-share"

export const socialLinks = [
    {
        button: TelegramShareButton,
        icon: TelegramIcon,
        text: "Telegram",
    },
    {
        button: FacebookShareButton,
        icon: FacebookIcon,
        text: "Facebook",
    },
    {
        button: TwitterShareButton,
        icon: TwitterIcon,
        text: "Twitter",
    },
    {
        button: WhatsappShareButton,
        icon: WhatsappIcon,
        text: "WhatsApp",
    },
    {
        button: ViberShareButton,
        icon: ViberIcon,
        text: "Viber",
    },
    {
        button: EmailShareButton,
        icon: EmailIcon,
        text: "Gmail",
    },
]
