import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      flexDirection="column"
      padding={3}
      backgroundColor="white"
      flex="1" // Ensures it takes up the remaining space
      borderRadius="lg"
      borderWidth="1px"
      height="100%" // Full height of the available space
      overflow="hidden" // Prevents overflow in ChatBox itself
    >
      <Box
        flex="1" // Makes sure SingleChat takes up all available space except for the input area
        overflowY="auto" // Enables vertical scrolling
      >
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
      {/* Add the input area here */}
    </Box>
  );
};

export default ChatBox;
