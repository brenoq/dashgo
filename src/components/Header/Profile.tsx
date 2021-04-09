import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Breno Quirino</Text>
            <Text color="gray.300" fontSize="small">
              brenoq@gmail.com
            </Text>
          </Box>
        )}

      <Avatar size="md" name="Breno Quirino" src="https://github.com/brenoq.png"/>
    </Flex>
  );
}