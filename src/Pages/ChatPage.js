import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/sideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      {user && <SideDrawer />}
      <Box
        display="flex"
        flex="1"
        p="10px"
        overflow="hidden"
      >
        {user && (
          <Box
            display={{ base: "none", md: "flex" }}
            width={{ base: "100%", md: "30%" }} // 30% width for MyChats
            bg="white"
            borderRight="1px solid #e2e8f0"
            borderRadius="lg"
            height="100%"
            overflowY="auto"
            position="relative"
          >
            <MyChats fetchAgain={fetchAgain} />
          </Box>
        )}
        {user && (
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            bg="white"
            borderRadius="lg"
            height="100%"
            overflowY="auto"
            ml={{ base: 0, md: 4 }} // Add margin-left to create space between MyChats and ChatBox
          >
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Chatpage;
