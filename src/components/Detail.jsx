import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [showTrailer, setShowTrailer] = useState(false); // State to manage trailer visibility

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "movies", id); // Create a document reference
      const docSnap = await getDoc(docRef); // Get the document snapshot

      if (docSnap.exists()) {
        setDetailData(docSnap.data());
      } else {
        console.log("No such document in Firebase");
      }
    };

    fetchData().catch((error) => {
      console.log("Error getting document:", error);
    });
  }, [id]);

  return (
    <Container>
      <Background>
        {showTrailer ? (
          <Iframe
            src={`https://www.youtube.com/embed/${detailData.trailerUrl}?autoplay=1&loop=1&playlist=${detailData.trailerUrl}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></Iframe>
        ) : (
          <img
            src={detailData.backgroundImg} // Use dynamic background image
            alt={detailData.title}
          />
        )}
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer onClick={() => setShowTrailer(true)}>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 60px 0px 24px;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  min-width: 160px;

  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    font-size: 13px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;
    min-width: 115px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }
    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(0, 0, 0);
  }
  img {
    width: 100%;
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
