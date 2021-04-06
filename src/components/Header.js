import React, { useContext } from "react";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "../State";

const Header = () => {
  let { location } = useHistory();
  let nameArr = location.pathname.split("/");
  const [state, dispatch] = useContext(StateContext);

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#">
        <img
          alt=""
          src="https://icons-for-free.com/iconfiles/png/512/cash+credit+currency+finance+payment+wallet+icon-1320086012966308148.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        E-wallet
      </Navbar.Brand>

      {state.wallets.length !== 0 && (
        <DropdownButton
          id="dropdown-basic-button"
          title={nameArr[nameArr.length - 1]}
        >
          <Link to="/walletform">
            <Dropdown.Item href="/walletform">
              create a new wallet
            </Dropdown.Item>
          </Link>
          {state.wallets.map((el) => {
            return (
              <Link to={"/wallet/" + el.walletname}>
                <Dropdown.Item href={"/wallet/" + el.walletname}>
                  {el.walletname}
                </Dropdown.Item>
              </Link>
            );
          })}
        </DropdownButton>
      )}
    </Navbar>
  );
};

export default Header;
