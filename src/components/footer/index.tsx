import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/logo.png";
import { SelectedPage } from "../../shared/type";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto gap-16 w-5/6 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            At EVOGYM, we believe in evolving with every rep, every session, and
            every member. Join us and experience a new era of fitness, where
            you&#39;ll reach new heights and achieve the impossible.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <AnchorLink
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.Home}`}
          >
            <p className="my-5 hover:text-primary-500">Home</p>
          </AnchorLink>
          <AnchorLink
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.Benefits}`}
          >
            <p className="my-5 hover:text-primary-500">Benefits</p>
          </AnchorLink>

          <AnchorLink
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.OurClasses}`}
          >
            <p className="hover:text-primary-500">Our Classes</p>
          </AnchorLink>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          {/* <p className="my-5">Lorem ipsum dolor sit.</p> */}
          <p>(333)456-786-9870</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
