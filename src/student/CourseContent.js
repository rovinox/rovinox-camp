import React from "react";
import Day1 from "./course/Day1";
import Day2 from "./course/Day2";
import Day3 from "./course/Day3";
import Day4 from "./course/Day4";
import Day5 from "./course/Day5";
import Day6 from "./course/Day6";
import Day7 from "./course/Day7";
import Day8 from "./course/Day8";
import Day9 from "./course/Day9";
import Day10 from "./course/Day10";
import Day11 from "./course/Day11";
import Day12 from "./course/Day12";
import Day13 from "./course/Day13";
import Day14 from "./course/Day14";
import Day15 from "./course/Day15";
import Day16 from "./course/Day16";
import Day17 from "./course/Day17";
import Day18 from "./course/Day18";
import Day19 from "./course/Day19";
import Day20 from "./course/Day20";
import Day21 from "./course/Day21";
import Day22 from "./course/Day22";
import Day23 from "./course/Day23";
import Day24 from "./course/Day24";
import Day25 from "./course/Day25";
import Day26 from "./course/Day26";
import Day27 from "./course/Day27";
import Day28 from "./course/Day28";
import Day29 from "./course/Day29";
import CourseLanding from "./CourseLanding";

export default function CourseContent({ day }) {
  switch (day) {
    case 1:
      return <Day1 />;
    case 2:
      return <Day2 />;
    case 3:
      return <Day3 />;
    case 4:
      return <Day4 />;
    case 5:
      return <Day5 />;
    case 6:
      return <Day6 />;
    case 7:
      return <Day7 />;
    case 8:
      return <Day8 />;
    case 9:
      return <Day9 />;
    case 10:
      return <Day10 />;
    case 11:
      return <Day11 />;
    case 12:
      return <Day12 />;
    case 13:
      return <Day13 />;
    case 14:
      return <Day14 />;
    case 15:
      return <Day15 />;
    case 16:
      return <Day16 />;
    case 17:
      return <Day17 />;
    case 18:
      return <Day18 />;
    case 19:
      return <Day19 />;
    case 20:
      return <Day20 />;
    case 21:
      return <Day21 />;
    case 22:
      return <Day22 />;
    case 23:
      return <Day23 />;
    case 24:
      return <Day24 />;
    case 25:
      return <Day25 />;
    case 26:
      return <Day26 />;
    case 27:
      return <Day27 />;
    case 28:
      return <Day28 />;
    case 29:
      return <Day29 />;
    default:
      return <CourseLanding />;
  }
}
