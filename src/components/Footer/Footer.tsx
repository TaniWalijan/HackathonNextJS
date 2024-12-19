import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFullLinkFooter";


export default function Footer() {
  return (
    <footer className="bg-[#f4ebe2] text-black">
      <div className="container mx-auto px-4 py-16">
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-8"></div>
        <div className="flex justify-between items-center mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>
      <div className="bg-[#e2a970] py-8 flex ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Tania Walijan. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}