import {useDisclosure, Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Progress, CircularProgress } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Payments = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [yes, setyes] = useState(false)
  const [cvv, setCvv] = useState("")
  const [bad, setbad] = useState(false)
  const card = useRef({})
  const navigate=useNavigate()
  const handleclick=()=>{
      setyes(true);
      setTimeout(() => {
        navigate("/lastpage")  
      }, 3000);
  }
  const handleclick1=()=>{
      setCvv(card.current.code.value);
      if(cvv!=="")
      navigate("/lastpage")  
      else
      setbad(true)
  }
return (
  <div>
      {yes&&<Flex margin="auto" width="250px">
      <Text fontSize='3xl'>Placing order</Text>
      <CircularProgress isIndeterminate color='green.300' />
      </Flex>}
      
      <br/>
      <Box width="70%" border="1px solid #bdbdbd" margin="auto">
      <Text fontSize='3xl'>Payment Options</Text>
      <br/>
      <Flex flexDirection="column" gap="1rem" alignItems="center">
      <Button colorScheme='teal' variant='outline' width="40%" onClick={handleclick}>Cash on delivery</Button>
      <Button colorScheme='teal' variant='outline' width="40%" onClick={onOpen}>Pay by card</Button>
      <br/>
      </Flex>
      

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Using Card</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <br/>
      <Flex flexDirection="column" gap="1rem" alignItems="center">
      <Input placeholder='Card Number*' type="number" width="60%" ref={(e)=>card.current["number"]=e}/>
      <Input placeholder='Expiration date*' type="number" width="60%" ref={(e)=>card.current["exp"]=e}/>
      <Input placeholder='Security code*' type="number" width="60%" ref={(e)=>card.current["code"]=e}/>
      {bad&&<Text color="red">Fields marked * are mandatory</Text>}
      </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={handleclick1}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
      
      
  </Box>
  <br/>
  </div>
  
)
}

export default Payments