// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Button, Image, Text, VStack, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useColorModeValue } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  // State to manage play and pause
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState({
    title: "Sample Song",
    artist: "Artist Name",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzE0NjgwNDE2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  });
  const [songProgress, setSongProgress] = React.useState(0);

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Placeholder for handling song progress
  const handleSliderChange = (value) => {
    setSongProgress(value);
  };

  return (
    <Box bg={useColorModeValue("gray.900", "gray.900")} minH="100vh" p={5} color="white">
      <VStack spacing={4} align="center">
        <Image boxSize="200px" src={currentSong.cover} alt="Album cover" borderRadius="full" />
        <Text fontSize="2xl" fontWeight="bold">
          {currentSong.title}
        </Text>
        <Text fontSize="md">{currentSong.artist}</Text>
        <HStack>
          <Button onClick={() => {}} variant="ghost">
            <FaBackward />
          </Button>
          <Button onClick={togglePlay} colorScheme="blue" size="lg">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
          <Button onClick={() => {}} variant="ghost">
            <FaForward />
          </Button>
        </HStack>
        <Slider aria-label="song-progress" value={songProgress} onChange={handleSliderChange} min={0} max={100} colorScheme="blue">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </VStack>
    </Box>
  );
};

export default Index;
