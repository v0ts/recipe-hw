import {
  StyledDifficulty,
  StyledDifficultyText,
  StyledDifficultyTextLight,
  StyledLightItem,
  StyledItem,
  StyledList,
  StyledText,
} from "./RecipeDifficulty";

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <StyledDifficulty>
      <StyledText>Difficulty</StyledText>
      <StyledList>
        {
          (difficulty === 0 ? (
            <StyledLightItem>
              <StyledDifficultyTextLight>Easy</StyledDifficultyTextLight>
            </StyledLightItem>
          ) : (
            <StyledItem>
              <StyledDifficultyText>Easy</StyledDifficultyText>
            </StyledItem>
          ))
        }
        {
          (difficulty === 1 ? (
            <StyledLightItem>
              <StyledDifficultyTextLight>Medium</StyledDifficultyTextLight>
            </StyledLightItem>
          ) : (
            <StyledItem>
              <StyledDifficultyText>Medium</StyledDifficultyText>
            </StyledItem>
          ))
        }
        {
          (difficulty === 2 ? (
            <StyledLightItem>
              <StyledDifficultyTextLight>Hard</StyledDifficultyTextLight>
            </StyledLightItem>
          ) : (
            <StyledItem>
              <StyledDifficultyText>Hard</StyledDifficultyText>
            </StyledItem>
          ))
        }
      </StyledList>
    </StyledDifficulty>
  );
};
