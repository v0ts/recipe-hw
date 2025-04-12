import {
  StyledDiv,
  StyledItem,
  StyledList,
  StyledText,
} from "./RecipeInformation";

export const RecipeInformation = ({ information }) => {
  return (
    <StyledDiv>
      <StyledList>
        <StyledItem>
          <StyledText>{information.minutes} min</StyledText>
        </StyledItem>
        <StyledItem>
          <StyledText>{information.servings} servings</StyledText>
        </StyledItem>
        <StyledItem>
          <StyledText>{information.calories} calories</StyledText>
        </StyledItem>
      </StyledList>
    </StyledDiv>
  );
};
