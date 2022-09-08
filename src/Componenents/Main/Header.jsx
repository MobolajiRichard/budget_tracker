import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import { removeUser } from "../redux/userSlice";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
`;
const Span = styled.span`
  display: flex;
  padding: 0 2%;
  color: red;
`;

const Logo = styled.span`
  font-family: cursive;
  color: brown;
  font-weight: 800;
`;

function Header() {
const dispatch = useDispatch()
  const user = useSelector((state) => state.user.currentUser);
  const logout = () => {
    dispatch(removeUser())
  }
  return (
    <Wrapper>
      <p>
        Welcome <Logo>{user}</Logo>,{" "}
      </p>

      <Span>
        <Tooltip
          title="logout"
          placement="left"
          arrow
        >
          <IconButton onClick={logout} sx={{ transform: "rotate(180deg)" , color:'red'}}>
            <Logout />
          </IconButton>
        </Tooltip>
      </Span>
    </Wrapper>
  );
}

export default Header;
