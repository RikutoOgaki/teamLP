import React from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'
import './style.css'

function App() {
  return(
    <Box
        bg={"#F5F3E4"}
        overflow={"hidden"}
    >
      <Flex
        justifyContent={"flex-end"}
        position={"relative"}
      >
        <Box
          as='img'
          src='./public/img/グループ 5373.png'
          alt='右画面'
          position={"absolute"}
          top={"265px"}
          right={"-120px"}
          w={"600px"}
          h={"400px"}
          zIndex={"1"}
          ></Box>
          <Box
            as='img'
            src='./public/img/グループ 5357.png'
            alt='右の木'
            w={"400px"}
            h={"500px"}
            position={"absolute"}
            top={"80px"}
            right={"130px"}
            zIndex={"0"}
          ></Box>
          <Box
            as='img'
            src='./public/img/グループ 5375.png'
            alt='fun'
            w={"400px"}
            h={"200px"}
            position={"absolute"}
            top={"70px"}
            right={"30px"}
          ></Box>
      </Flex>
      <Box
        as='img'
        src='./public/img/グループ 5377.png'
        w={"450px"}
        h={"150px"}
        position={"absolute"}
        top={"40px"}
        left={"30px"}
        zIndex={"1"}
      ></Box>
      <Box
        as='img'
        src='./public/img/グループ 5363.png'
        alt='左の木'
        w={"400px"}
        h={"500px"}
        position={"absolute"}
        left={"140px"}
        zIndex={"0"}
      ></Box>
      <Box
        as='img'
        src='./img/グループ 5359.png'
        alt='左画面'
        position={"absolute"}
        top={"265px"}
        left={"-120px"}
        w={"600px"}
        h={"400px"}
      ></Box>
      <Center>
        <Box 
          as='img' 
          src='./img/logo.png' 
          alt='logo' 
          w={"600px"} 
          h={"180px"}
          marginTop={"70px"}
          zIndex={"9999"}
        ></Box>
      </Center>
      <Center>
        <Box 
          as='img' 
          src='./img/アプリを通じて子どもの家のお手伝いをサポートするアプリお手伝いをして自分だけの動物園を作ろう！.png' 
          alt='文字' 
          w={"500px"} 
          h={"130px"}
          marginTop={"10px"}
        ></Box>
      </Center>
      <Center>
        <Box
          as='img'
          src='./img/グループ 5361.png'
          w={"450px"} 
          h={"60px"}
          marginTop={"20px"}
        ></Box>
      </Center>
      <Center position={"relative"}>
        <Box
          as='img'
          src='./public/img/グループ 5362.png'
          alt='うさぎ'
          position={"absolute"}
          top={"30px"}
          left={"420px"}
        ></Box>
        <Box
          as='img'
          src='./public/img/グループ 5364.png'
          alt='らいおん'
          position={"absolute"}
          top={"50px"}
          right={"460px"}
          zIndex={"1"}
        ></Box>
      </Center>
      <Center 
          w={"100%"}
          >
        <Box 
          as='img' 
          src='./public/img/グループ 5372.png' 
          alt='reef'
          maxW={"none"}
          w={"200%"}
          display={"block"}
          ></Box>
      </Center>
      <Center position={"relative"}>
        <Box
          as='img'
          src='./public/img/グループ 5381.png'
          w={"1200px"}
          h={"200px"}
          marginTop={"50px"}
        >
        </Box>
          <h2 className='h2'>子供のお手伝いをサポートするサービス</h2>
      </Center>
      <Box 
          w={"100%"}
          h={"100%"}
          >
        <Box 
          position={"relative"}
          w={"100%"}
          h={"1000px"}
        >
          <Box
            as='img'
            src='./public/img/グループ 5382.png'
            position={"absolute"}
            top={"100px"}
            zIndex={"0"}
            ></Box>
          <Flex 
              justifyContent={"center"}
              position={"relative"}
              >
            <Box
              as='img'
              src='./public/img/グループ 5393.png'
              w={"600px"}
              h={"400px"}
              position={"absolute"}
              top={"200px"}
              left={"130px"}
              zIndex={"1"}
            ></Box>
            <Box
              as='img'
              src='./public/img/グループ 5392.png'
              w={"600px"}
              h={"400px"}
              position={"absolute"}
              top={"300px"}
              right={"130px"}
              zIndex={"1"}
            ></Box>
            {/* <Box></Box> */}
          </Flex>
        </Box>
        <Box
          position={"relative"}
          w={"100%"}
          h={"1000px"}
        >
          <Box
            as='img'
            src='./public/img/グループ 5384.png'
            position={"absolute"}
            top={"25px"}
            ></Box>
            <Flex 
              justifyContent={"center"}
              position={"relative"}
              >
            <Box
              as='img'
              src='./public/img/グループ 5413.png'
              w={"600px"}
              h={"400px"}
              position={"absolute"}
              top={"140px"}
              left={"130px"}
              zIndex={"1"}
            ></Box>
            <Box
              as='img'
              src='./public/img/グループ 5411.png'
              w={"600px"}
              h={"400px"}
              position={"absolute"}
              top={"240px"}
              right={"130px"}
              zIndex={"1"}
            ></Box>
          </Flex>
        </Box>
        <Box
          position={"relative"}
          w={"100%"}
          h={"1000px"}
        >
          <Box
            as='img'
            src='./public/img/グループ 5387.png'
            position={"absolute"}
            bottom={"40px"}
            ></Box>
              <Flex 
              justifyContent={"center"}
              position={"relative"}
              >
            <Box
              as='img'
              src='./public/img/グループ 5408.png'
              w={"600px"}
              h={"400px"}
              position={"absolute"}
              top={"50px"}
              left={"130px"}
              zIndex={"1"}
            ></Box>
            <Box
              as='img'
              src='./public/img/グループ 5409.png'
              w={"600px"}
              h={"400px"}
              position={"absolute"}
              top={"150px"}
              right={"130px"}
              zIndex={"1"}
            ></Box>
          </Flex>
        </Box>
        <Center
          marginTop={"60px"}
          marginBottom={"200px"}
        >
          <Box
            as='img'
            src='./public/img/グループ 5421.png'
            ></Box>
        </Center>
        <Center
          marginBottom={"120px"}
        >
          <Box
            as='img'
            src='./public/img/グループ 5415.png'
            w={"80%"}
          ></Box>
        </Center>
        <Center
          marginBottom={"120px"}
        >
          <Box
            as='img'
            src='./public/img/グループ 5420.png'
            w={"80%"}
          ></Box>
        </Center>
        <Center>
          <Box
            as='img'
            src='./public/img/グループ 5419.png'
            w={"80%"}
          ></Box>
        </Center>
      </Box>
      <Flex
        justifyContent={"center"}
      >
        <Box
          as='img'
          src='./public/img/グループ 5426.png'
        ></Box>
      </Flex>
    </Box>
  )
}

export default App
