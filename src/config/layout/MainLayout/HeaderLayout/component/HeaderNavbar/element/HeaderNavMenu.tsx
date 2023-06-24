import { Text, useColorModeValue } from "@chakra-ui/react"

const HeaderNavMenu = () => {
  return (
    <Text color={useColorModeValue('red','gray.900')}>
      Heading
    </Text>
  )
}

export default HeaderNavMenu