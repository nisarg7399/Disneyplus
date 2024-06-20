import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/movieSlice';
import Skeleton from '@mui/material/Skeleton';

// Styled components for layout and styling
const Container = styled.div`
  padding: 0 0 26px;
  font-family: 'Fjalla One', sans-serif;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 5px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.40);
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 2;
  }
`;

// NewDisney component
const NewDisney = () => {
  const movies = useSelector(selectNewDisney);
  const isLoading = !movies || movies.length === 0; // Check if movies is null or empty

  return (
    <Container>
      <h1>NEW TO DISNEY +</h1>
      <Content>
        {isLoading ? (
          // Show skeleton loader while movies are loading or if movies is null
          <>
            {[...Array(4)].map((_, index) => (
              <Wrap key={index}>
                <Skeleton variant="rectangular" animation="wave" width="100%" height="100%" />
              </Wrap>
            ))}
          </>
        ) : (
          // Show actual movie items when movies are loaded
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))
        )}
      </Content>
    </Container>
  );
};

export default NewDisney;
