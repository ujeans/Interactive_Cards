import React from "react";
import styled, { keyframes } from "styled-components";
import Card from "../components/card/Card";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "path_to_image_1",
  },
  {
    id: 2,
    title: "Project 2",
    image: "path_to_image_2",
  },
  {
    id: 3,
    title: "Project 3",
    image: "path_to_image_3",
  },
  {
    id: 4,
    title: "Project 4",
    image: "path_to_image_4",
  },
  {
    id: 5,
    title: "Project 5",
    image: "path_to_image_5",
  },
  {
    id: 6,
    title: "Project 6",
    image: "path_to_image_6",
  },
];

const ProjectPage = () => {
  const angleStep = 360 / projects.length;

  return (
    <AppContainer>
      <Circle>
        {projects.map((project, index) => (
          <CircleItem
            key={project.id}
            style={{
              transform: `translate(-50%, -50%) rotate(${
                index * angleStep
              }deg) translateY(-500px) rotateX(90deg)`,
            }}
          >
            <Card id={project.id} title={project.title} image={project.image} />
          </CircleItem>
        ))}
      </Circle>
    </AppContainer>
  );
};

export default ProjectPage;

const rotateAnimation = keyframes`
  0% {
    transform: rotateX(-100deg) rotate(0);
  }
  100% {
    transform: rotateX(-100deg) rotate(-360deg);
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: #fcf3eb;
  /* background-color: #1e68b6; */
`;

const Circle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  transform-style: preserve-3d;
  animation: ${rotateAnimation} 30s linear infinite;
  position: relative;
  width: 600px;
  height: 600px;
`;

const CircleItem = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
`;
