import styled from "styled-components";
import logo from "../assets/react.svg";
import { vars } from "../styles/Variables";
import { AiOutlineHome, AiOutlineApartment, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

export function Sidebar({ sidebarState, setSidebarState }) {
  return (
    <Container
      isOpen={sidebarState}
      onMouseEnter={() => setSidebarState(true)}
      onMouseLeave={() => setSidebarState(false)}
    >
      <div className="LogoContent">
        <div className="imgcontent">
          <img
            src="https://res.cloudinary.com/depp3/image/upload/v1680133073/Wharehouse_control/wc_qnrbd5.png"
            alt=""
          />
        </div>
        <h2>joalvarez</h2>
      </div>
      {links.map(({ label, icon, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links ${isActive ? ` active` : ``}`}
          >
            <div className="LinkIcon">{icon}</div>
            {sidebarState && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondaryLinksArray.map(({ label, icon, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links ${isActive ? ` active` : ``}`}
          >
            <div className="LinkIcon">{icon}</div>
            {sidebarState && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
    </Container>
  );
}

//#region Data Links
const links = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Products",
    icon: <AiOutlineApartment />,
    to: "/product",
  },
];
const secondaryLinksArray = [
  {
    label: "Configuration",
    icon: <AiOutlineSetting />,
    to: "/configuration",
  },
  {
    label: "Logout",
    icon: <MdLogout />,
    to: "/logout",
  }
]
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: sticky;
  padding-top: 20px;
  height: 93vh;
  .LogoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${vars.lgSpacing};
    .imgcontent {
      display: flex;
      cursor: pointer;
      transition: all 0.3s;
      /* transform: ${({ isOpen }) =>
        isOpen ? "scale(0.7)" : "scale(0.7)"}; */
      img {
        max-width: 80%;
        height: auto;
      }
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    }
  }
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${vars.smSpacing} - 2px) 0;
      .LinkIcon {
        padding: ${vars.smSpacing} ${vars.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        color: ${(props) => props.theme.bg4};
        .LinkIcon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${vars.lgSpacing} 0;
`;
//#endregion
