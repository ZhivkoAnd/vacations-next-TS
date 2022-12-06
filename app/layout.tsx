import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/Navigation.scss";
import "../styles/ActionBar.scss";
import "../styles/Footer.scss";
import "../styles/VacationPanel.scss";
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import Wrap from "./Wrap";
import { Providers } from "./Providers";

interface Props {
  children: any;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Wrap>
            <div className="container">{children}</div>
          </Wrap>
        </Providers>
      </body>
    </html>
  );
}
