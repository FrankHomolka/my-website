import ProjectDetails from "../Components/ProjectDetails";
import flowerKnightImage from "../Media/flower_knight.png";

export default function FlowerknightPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ProjectDetails
        title={"Flower Knight"}
        description={[
          "Flower knight was the first game I ever completed. ",
          "It's a dungeon crawler roguelike where you unlock more and more items until you're strong enough to defeat the king of hell. ",
          "You're a simple warlord, living in the depths of hell, slaying your enemies and ruling your fiefdom.",
          "Yet you want something different, a garden.",
          "So your mission is simple, enter the Kill of Hell's castle, fight your way to its core, and escape to the overworld.",
          "I drew inspiration from game likes Risk of Rain, Nuclear Throne, and enter the gungeon.",
        ]}
        dateCreated={"December 20th, 2021"}
        coverImage={flowerKnightImage}
        downloadLink={"test"}
        techUsed={
          "Coded in Gamemaker Studio 2.0, art created in Aseprite, sound effects created with Reaper, music composed in Reaper."
        }
      />
    </div>
  );
}
