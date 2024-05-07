import Info from "./Info";
import Menu from "./Menu";
import ContactUs from "./ContactUs";
import DownloadApp from "./DownloadApp";

export default function Footer() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left mt-12 bg-gray-200 p-2">
      <Info />
      <Menu />
      <ContactUs />
      <DownloadApp />
    </section>
  );
}
