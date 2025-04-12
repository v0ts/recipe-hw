import { StyledImage, StyledItem, StyledText } from "./RecipeItem.js";
import { RecipeInformation } from "../RecipeInformation/RecipeInformation.jsx";
import { RecipeDifficulty } from "../RecipeDifficulty/RecipeDifficulty.jsx";

export const RecipeItem = ({ img, name, information, difficulty }) => {
  return (
    <StyledItem>
      <StyledImage src={img} />
      <StyledText>{name}</StyledText>
      <RecipeInformation information={information} />
      <RecipeDifficulty difficulty={difficulty} />
    </StyledItem>
  );
};
