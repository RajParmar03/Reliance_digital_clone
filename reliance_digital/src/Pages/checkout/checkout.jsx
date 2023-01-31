import {useDisclosure, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, Input, Flex, useToast } from '@chakra-ui/react'
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Checkout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const address=useRef({})
    const toast = useToast()
    const {firstName,lastName,mobile,pincode,flat,setflat,state,setstate,street,setstreet,city,setcity,}=useContext(AppContext)
    const handleAddress=()=>{
      setflat(address.current.flat.value);
      setstate(address.current.state.value);
      setstreet(address.current.street.value);
      setcity(address.current.city.value);
    }
    const navigate=useNavigate()
    return (
      <div style={{backgroundColor:"#f1eeee" }}>
      <Box width="90%" margin="auto" backgroundColor="white" boxShadow='base'>
      <Accordion defaultIndex={[0]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            <Text fontSize='3xl'>Shipping address</Text>
          </Box>
            
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {(flat==="")&&<Box>No address found</Box>}
        {(flat!=="")&&<Box>
          {/* <Flex width="300px" justifyContent="space-between"><Text fontWeight="bold" fontStyle="italic" >Name: </Text><Text > {firstName} {lastName}</Text></Flex> */}
          <Flex width="300px" justifyContent="space-between"><Text fontWeight="bold" fontStyle="italic">Flat: </Text><Text > {flat}</Text></Flex>
          <Flex width="300px" justifyContent="space-between"><Text fontWeight="bold" fontStyle="italic">Street: </Text><Text > {street}</Text></Flex>
          <Flex width="300px" justifyContent="space-between"><Text fontWeight="bold" fontStyle="italic">City: </Text><Text > {city}</Text></Flex>
          <Flex width="300px" justifyContent="space-between"><Text fontWeight="bold" fontStyle="italic">State: </Text><Text > {state}</Text></Flex>
          
          
        </Box>}
        {(flat!=="")&&<Button onClick={()=>navigate("/payments")} colorScheme='blue' variant='outline'>Proceed to payments</Button>}
        {(flat==="")&&<Button onClick={onOpen} colorScheme='blue' variant='outline'>Add a new shipping address</Button>}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Flex flexDirection="column" gap="1rem">
                <Input placeholder='Pincode*' ref={(e)=>address.current["pin"]=e} />
                <Flex gap="1rem">
                {/* <Input placeholder='Enter First Name*' ref={(e)=>address.current["name"]=e} />
                <Input placeholder='Enter Last Name*' ref={(e)=>address.current["last"]=e} /> */}

                </Flex>
                <Input placeholder='Enter Flat / Building Name*' ref={(e)=>address.current["flat"]=e}/>
                <Input placeholder='Enter  Colony / Street*' ref={(e)=>address.current["street"]=e}/>
                <Input placeholder='Enter Landmark' ref={(e)=>address.current["landmark"]=e}/>
                <Flex gap="1rem">
                <Input placeholder='Enter City*' ref={(e)=>address.current["city"]=e}/>
                <Input placeholder='Enter State*' ref={(e)=>address.current["state"]=e}/>
                </Flex>
                <Flex gap="1rem">
                {/* <Input placeholder='Enter mobile number*' ref={(e)=>address.current["mobile"]=e} value={mobile}/>
                <Input placeholder='Enter landline number*' ref={(e)=>address.current["land"]=e}/> */}
                </Flex>
                </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='ghost' onClick={()=>{
                handleAddress();
            if(flat!==""&&state!==""&&city!==""&&street!=="")
            {          toast({
            title: 'Address successfully added.',
            description: "We'll use this for further communication.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          }) 
          // navigate("/checkout")
          }
          // else
          // setfirst(true)
          }}>SUBMIT</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  </Box>
  </div>
    )
  }
  
  export default Checkout