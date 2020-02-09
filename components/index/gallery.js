import styled from "@emotion/styled";
import { mediaQuery, imageHost } from "../../utils/config";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
  img {
    ${mediaQuery.phone} {
      height: 108px;
    }
    ${mediaQuery.desktop} {
      height: 176px;
    }
    margin: 4px;
    border-radius: 2px;
  }
`;

export default function Gallery() {
  return (
    <>
      <h3>Gallery</h3>
      <GalleryContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <img
            key={i}
            src={`${imageHost}/gallery/pic-${i}.jpg`}
            alt={`pic-${i}`}
          />
        ))}
      </GalleryContainer>
    </>
  );
}
