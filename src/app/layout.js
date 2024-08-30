import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Task 1",
  description: "First Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <main>
            <Header />

            {/* <div className="container-fluid ">
              <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a
                      href="/"
                      className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                      <span className="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <ul
                      className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                      id="menu">
                      <li className="nav-item">
                        <a
                          href="/newPage"
                          className="nav-link align-middle px-0">
                          <i className="fs-4 bi-house"></i>{" "}
                          <span className="ms-1 d-none d-sm-inline">
                            News 1
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/newPage2"
                          data-bs-toggle="collapse"
                          className="nav-link px-0 align-middle">
                          <i className="fs-4 bi-speedometer2"></i>{" "}
                          <span className="ms-1 d-none d-sm-inline">
                            News 2
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="newPage3"
                          className="nav-link px-0 align-middle">
                          <i className="fs-4 bi-table"></i>{" "}
                          <span className="ms-1 d-none d-sm-inline">
                            News 3
                          </span>
                        </a>
                      </li>
                    </ul>
                    <hr />
                  </div>
                </div>
                <div className="">
                  <div className="flex-1 main ">{children}</div>
                </div>
              </div>
            </div> */}
            <div className=" ">{children}</div>

            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
