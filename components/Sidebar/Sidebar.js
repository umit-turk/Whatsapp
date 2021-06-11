import React from "react";
import {
  Container,
  Header,
  UserAvatar,
  IconsContainer,
  SearchInput,
  Search,
  SidebarButton,
} from "./sidebarStyles";
import { IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="search in chats" />
      </Search>

      <SidebarButton>Start a new chat</SidebarButton>

      {/* List of chats */}
    </Container>
  );
}

export default Sidebar;
