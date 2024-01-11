import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const members = [
  {
    id: "1",
    name: "Christian Nwamba",
    handle: "@christian",
    avatarUrl: "https://bit.ly/code-beast",
    status: "active",
    message: "Some message",
    lastSeen: "just now",
  },
  {
    id: "2",
    name: "Kent C. Dodds",
    handle: "@kent",
    avatarUrl: "https://bit.ly/kent-c-dodds",
    status: "active",
    message: "Some message",
    lastSeen: "2hr ago",
  },
  {
    id: "3",
    name: "Prosper Otemuyiwa",
    handle: "@prosper",
    avatarUrl: "https://bit.ly/prosper-baba",
    status: "active",
    message: "Some message",
    lastSeen: "3hr ago",
  },
  {
    id: "4",
    name: "Ryan Florence",
    handle: "@ryan",
    avatarUrl: "https://bit.ly/ryan-florence",
    status: "active",
    message: "Some message",
    lastSeen: "4hr ago",
  },
  {
    id: "5",
    name: "Segun Adebayo",
    handle: "@segun",
    avatarUrl: "https://bit.ly/sage-adebayo",
    status: "inactive",
    message: "Some message",
    lastSeen: "5hr ago",
  },
];

const Page = () => {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>

      <Center maxW="sm" mx="auto" py={{ base: "4", md: "8" }}>
        <Box bg="bg.surface" py="4">
          <Stack divider={<StackDivider />} spacing="4">
            {members.map((member) => (
              <Stack key={member.id} fontSize="sm" px="4" spacing="4">
                <Stack direction="row" justify="space-between" spacing="4">
                  <HStack spacing="3">
                    <Avatar src={member.avatarUrl} boxSize="10">
                      <AvatarBadge
                        boxSize="4"
                        bg={member.status === "active" ? "success" : "subtle"}
                      />
                    </Avatar>
                    <Box>
                      <Text fontWeight="medium" color="fg.emphasized">
                        {member.name}
                      </Text>
                      <Text color="fg.muted">{member.handle}</Text>
                    </Box>
                  </HStack>
                  <Text color="fg.muted">{member.lastSeen}</Text>
                </Stack>
                <Text
                  color="fg.muted"
                  sx={{
                    "-webkit-box-orient": "vertical",
                    "-webkit-line-clamp": "2",
                    overflow: "hidden",
                    display: "-webkit-box",
                  }}
                >
                  Candy donut tart pudding macaroon. Soufflé carrot cake choc
                  late cake biscuit jelly beans chupa chups dragée. Cupcake
                  toffee gummies lemon drops halvah. Cookie fruitcake jelly
                  beans gingerbread soufflé marshmallow.
                </Text>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Center>
    </>
  );
};
export default Page;
