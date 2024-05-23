import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const bg = useColorModeValue("gray.100", "gray.700");
  const completedBg = useColorModeValue("green.100", "green.700");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Todo App
        </Heading>
        <Flex width="100%" mb={4}>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </Flex>
        <Box width="100%">
          <List spacing={3}>
            {tasks.map((task, index) => (
              <ListItem
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg={task.completed ? completedBg : bg}
                p={2}
                borderRadius="md"
              >
                <Checkbox
                  isChecked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                  mr={3}
                >
                  <Text as={task.completed ? "s" : ""}>{task.text}</Text>
                </Checkbox>
                <IconButton
                  aria-label="Delete task"
                  icon={<FaTrash />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => deleteTask(index)}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;