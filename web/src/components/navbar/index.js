"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import useUser from "@/redux/hooks/useUser";
import { getUser } from "@/services/user";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Insurance Products",
    subMenus: [
      {
        name: "Two Wheeler Insurance",
        link: "/two-wheeler-insurance",
      },
      {
        name: "Car Insurance",
        link: "/car-insurance",
      },
      {
        name: "Health Insurance",
        link: "/health-insurance",
      },
      {
        name: "View More",
        link: "/view-more",
      },
    ],
  },
  {
    name: "Become our POSP",
    link: "/become-our-posp",
  },
];

function Navbar() {
  const { user, login } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setShowMenu(false);
        setShowSubMenu(false);
      }
    };
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!user) {
      getUser().then((res) => {
        if (res.data) login(res.data);
      });
    }
  }, []);
  return (
    <nav className={`${styles.nav} ${scrolled && styles.scrolled}`}>
      <div className={styles.navbar}>
        <div className={styles.toggle_btn}>
          <button ref={btnRef} onClick={() => setShowMenu(!showMenu)}>
            <svg
              className={`ham hamRotate ham1 ${showMenu ? "active" : ""}`}
              viewBox="0 0 100 100"
              width="35"
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </button>
        </div>
        <div className={styles.logo}>
          <a href="/">
            <Image
              src="/images/logo.jpeg"
              alt="PureBima"
              width={160}
              height={35}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </a>
        </div>
        <div
          className={`${styles.menu_container} ${showMenu && styles.active}`}
        >
          <ul ref={menuRef} className={styles.menu}>
            {menus.map((menu) => (
              <li
                key={menu.name}
                className={menu?.subMenus ? styles.hasSubMenu : ""}
              >
                {menu.link ? (
                  <Link href={menu.link} onClick={() => setShowMenu(false)}>
                    {menu.name}
                  </Link>
                ) : (
                  <button onClick={() => setShowSubMenu(!showSubMenu)}>
                    <span>{menu.name}</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                )}
                {menu.subMenus && (
                  <ul
                    className={`${styles.subMenu} ${
                      showSubMenu && styles.active
                    }`}
                  >
                    {menu.subMenus.map((subMenu) => (
                      <li key={subMenu.name}>
                        <Link
                          href={subMenu.link}
                          onClick={() => setShowMenu(false)}
                        >
                          {subMenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {user ? (
            <div className={styles.login}>
              <span>{user?.name.slice(0, 10)}</span>
              <FontAwesomeIcon icon={faUserCircle} color="var(--primary)" />
            </div>
          ) : (
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
