import github from "@/shared/assets/images/icons/githubWhite.svg";
import youtube from "@/shared/assets/images/icons/youtubeWhite.svg";
import instagram from "@/shared/assets/images/icons/instagramWhite.svg";
import telegram from "@/shared/assets/images/icons/telegramWhite.svg";
import figma from "@/shared/assets/images/icons/figma.svg";
import { LogoTitleWhite } from "../../../../shared/ui";

export const Footer = () => {
  return (
    <footer className="bg-primary-925 text-white rounded-t-[20px] mt-10 md:mt-20 lg:mt-[130px] ">
      <div className="container mt-16 mb-5">
        <div className="gap-6">
          <div className="">
            <LogoTitleWhite />
            {/* <p className="flex text-start leading-5">
              Выбери, каким будет IT завтра,
              <br /> вместе с нами
            </p> */}
            <p className="flex text-start leading-5">
              Choose what IT will look like tomorrow — join us!
            </p>

            <div className="flex gap-4 mt-5">
              <a
                className="hover:-translate-y-1 transition duration-300 ease-in-out"
                href="https://www.youtube.com/@yeahub"
                target="_blanc"
                aria-label="YouTube"
              >
                <img src={youtube} alt="YouTube" />
              </a>
              <a
                className="hover:-translate-y-1 transition duration-300 ease-in-out"
                href="https://github.com/YeaHubTeam"
                target="_blanc"
                aria-label="GitHub"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                className="hover:-translate-y-1 transition duration-300 ease-in-out"
                href="https://www.instagram.com/yeahub_it"
                target="_blanc"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                className="hover:-translate-y-1 transition duration-300 ease-in-out"
                href="https://t.me/+CJj1aijpqGs1OGMy"
                target="_blanc"
                aria-label="Telegram"
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex mt-16 text-xs text-neutral-400">
          {/* <p className="text-left">
            YeahHub — это полностью открытый проект, призванный объединить и
            улучшить IT-сферу. Наш исходный код доступен на GitHub. Дизайн
            проекта также открыт для ознакомления в Figma.
          </p> */}
          <p className="text-left">
            YeahHub is a completely open-source project designed to unite and
            improve the IT industry. Our source code is available on GitHub. The
            project's design is also open for review in Figma.
          </p>
        </div>

        <div className="border-b border-[#E6E6E61A] my-5"></div>

        {/* Copyright */}
        <div className="flex items-center justify-between text-neutral-400 text-sm">
          © {new Date().getFullYear()} YeahHub
          <div className="flex items-center space-x-5">
            <a className="text-sm" href="#">
              Documents
            </a>
            <div className="flex items-center gap-3">
              <a
                className="hover:-translate-y-1 transition duration-300 ease-in-out"
                href="https://www.figma.com/design/zeEaKzgJNvIBLtWwkdZYny/YeaHub?node-id=10803-92639&t=JMPwdKDBmWS5PwnB-0"
                aria-label="Figma"
              >
                <img src={figma} alt="Figma" />
              </a>
              <a
                className="hover:-translate-y-1 transition duration-300 ease-in-out"
                href="https://github.com/YeaHubTeam"
                aria-label="GitHub"
              >
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
