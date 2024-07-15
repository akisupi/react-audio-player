// audio files
import Difference from "./Difference.mp3";
import everybody from "./everybody.mp3";
import free from "./free.mp3";
import the_wire from "./the_wire.m4a";
import peace from "./peace_in_christ.mp3";
import angel_by_your_side from "./Angel-by-your-side.mp3";
import { v4 as uuidv4 } from "uuid";

// thumbnail files
import thumbnail from "./music-wallpaper.png";
import moses_logo from "./new_logo_w.png";

export const tracks = [
  {
    trackId: uuidv4,
    title: "Difference",
    src: Difference,
    authour: "Tatiana Manois ft Chris howard",
    thumbnail: moses_logo,
    favorite: false,
  },
  {
    trackId: uuidv4,
    title: "Everybody (Official Audio)",
    src: everybody,
    authour: "Ingrid Michaelson",
    thumbnail: thumbnail,
    favorite: false,
  },
  {
    trackId: uuidv4,
    title: "Angel by your side",
    src: angel_by_your_side,
    authour: "Francesca battistelli",
    thumbnail: "",
    favorite: false,
  },
  {
    trackId: uuidv4,
    title: "peace in christ",
    src: peace,
    authour: "Claire Ryann and Dad",
    thumbnail: thumbnail,
    favorite: false,
  },
  {
    trackId: uuidv4,
    title: "Free Loop",
    src: free,
    authour: "七元 翻唱【直播Live】",
    thumbnail: thumbnail,
    favorite: false,
  },
  {
    trackId: uuidv4,
    title: "The Wire",
    src: the_wire,
    authour: "Unknown",
    thumbnail: "",
    favorite: false,
  },
];
