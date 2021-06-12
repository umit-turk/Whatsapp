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
import * as EmailValidator from "email-validator";

function Sidebar() {

  const createChat = () => {
    const input = prompt("Please enter an email adress for the user you wish to chat with");

    if(!input) return null;

    if(EmailValidator.validate(input)){
      // We need to add the chat info the DB 'chats' collection
    }
  }

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

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* List of chats */}
    </Container>
  );
}

export default Sidebar;
