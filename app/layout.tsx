import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/Navigation.scss";
import "../styles/ActionBar.scss";
import "../styles/Footer.scss";
import "../styles/VacationPanel.scss";
import "../styles/Notification.scss";
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import Wrap from "./Wrap";
import { Providers } from "./Providers";
import { Suspense } from "react";
import Loading from "./loading";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Wrap>
            <Suspense fallback={<Loading/>}>
              <div className="container">{children}</div>
            </Suspense>
          </Wrap>
        </Providers>
      </body>
    </html>
  );
}
