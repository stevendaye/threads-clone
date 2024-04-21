import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { PostPage, UserPage } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <Container maxW="2xl">
      <Header />

      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
};

export default App;
