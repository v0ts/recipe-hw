import { StyledList } from "./RecipeList.js";
import { RecipeItem } from "../RecipeItem/RecipeItem.jsx";

const data = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoXPFVjt-nzBKMp1yaiRPgS2PhJDoLi95Tg&s",
    name: "Smoked salmon burger",
    information: {
      minutes: 20,
      servings: 6,
      calories: 210,
    },
    difficulty: 0,
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoXPFVjt-nzBKMp1yaiRPgS2PhJDoLi95Tg&s",
    name: "Smoked salmon burger",
    information: {
      minutes: 2,
      servings: 1,
      calories: 50,
    },
    difficulty: 1,
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoXPFVjt-nzBKMp1yaiRPgS2PhJDoLi95Tg&s",
    name: "Smoked salmon burger",
    information: {
      minutes: 5,
      servings: 1,
      calories: 110,
    },
    difficulty: 1,
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoXPFVjt-nzBKMp1yaiRPgS2PhJDoLi95Tg&s",
    name: "Smoked salmon burger",
    information: {
      minutes: 10,
      servings: 3,
      calories: 210,
    },
    difficulty: 2,
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoXPFVjt-nzBKMp1yaiRPgS2PhJDoLi95Tg&s",
    name: "Smoked salmon burger",
    information: {
      minutes: 10,
      servings: 3,
      calories: 210,
    },
    difficulty: 2,
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoXPFVjt-nzBKMp1yaiRPgS2PhJDoLi95Tg&s",
    name: "Smoked salmon burger",
    information: {
      minutes: 10,
      servings: 3,
      calories: 210,
    },
    difficulty: 2,
    id: 1,
  },
];

export const RecipeList = () => {
  return (
    <StyledList>
      {data.map((el) => (
        <RecipeItem
          key={el.id}
          img={el.img}
          name={el.name}
          information={el.information}
          difficulty={el.difficulty}
        />
      ))}
    </StyledList>
  );
};
