import { Clock, MapPin, Phone } from "lucide-react";
import { CLUB, NAV } from "@/data/club";
import { VkIcon } from "./VkIcon";

const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(CLUB.address)}`;

export const Footer = () => (
  <footer id="contacts" className="bg-ink">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 md:py-16 lg:grid-cols-3">
      <div>
        <p className="font-display text-lg font-black uppercase tracking-widest">
          Fightboxing
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-khaki">
          {CLUB.tagline} · {CLUB.city}
        </p>
        <p className="mt-4 text-sm font-semibold text-flame">{CLUB.slogan}</p>
        <a
          href={CLUB.vk}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Сообщество клуба во ВКонтакте"
          className="clip-cut-sm mt-6 inline-flex h-11 w-11 items-center justify-center bg-moss text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame hover:text-ink"
        >
          <VkIcon className="h-5 w-5" />
        </a>
      </div>

      <div className="space-y-3 text-sm">
        <h3 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-flame">
          Контакты
        </h3>
        <p className="flex items-start gap-2 text-khaki">
          <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {CLUB.address} ·{" "}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone underline decoration-flame/60 underline-offset-4 transition-colors hover:text-flame"
            >
              открыть карту
            </a>
          </span>
        </p>
        <p className="flex items-center gap-2 text-khaki">
          <Phone aria-hidden className="h-4 w-4 shrink-0" />
          <a
            href={CLUB.phoneHref}
            className="font-semibold text-bone transition-colors hover:text-flame"
          >
            {CLUB.phone}
          </a>
        </p>
        <p className="flex items-center gap-2 text-khaki">
          <Clock aria-hidden className="h-4 w-4 shrink-0" />
          Открываемся в {CLUB.opensAt}
        </p>
      </div>

      <div className="text-sm">
        <h3 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-flame">
          Навигация
        </h3>
        <ul className="mt-3 space-y-2">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-khaki transition-colors hover:text-flame"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-bone/10 py-5 text-center text-xs text-khaki">
      © {new Date().getFullYear()} КЛУБ КЕФ «ФАЙТБОКСИНГ» · {CLUB.slogan}
    </div>
  </footer>
);
