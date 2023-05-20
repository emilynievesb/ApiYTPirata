import { previsualVideo } from "./previsual.js";
import { videoDescription, videoComments, videoRealted } from "./info.js";

async function fetchComments(idVideo) {
  const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${idVideo}&hl=en&gl=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf09b47b75msh4334f66fd4015cbp14c884jsn75a8b4100972",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    videoComments(result.comments);
  } catch (error) {
    console.error(error);
  }
}

async function fetchDescription(idVideo) {
  const url = `https://youtube138.p.rapidapi.com/video/details/?id=${idVideo}&hl=en&gl=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf09b47b75msh4334f66fd4015cbp14c884jsn75a8b4100972",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const description = result.description;
    console.log(result);
    videoDescription(description);
  } catch (error) {
    console.error(error);
  }
}

async function fetchRelated(idVideo) {
  const url = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${idVideo}&hl=en&gl=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf09b47b75msh4334f66fd4015cbp14c884jsn75a8b4100972",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  //
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    videoRealted(result.contents);
    console.log(result.contents);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchId(nameVideo) {
  const url = `https://youtube138.p.rapidapi.com/search/?q=${nameVideo}&hl=en&gl=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf09b47b75msh4334f66fd4015cbp14c884jsn75a8b4100972",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const idVideo = result.contents[1].video.videoId;
    const titleVideo = result.contents[1].video.title;
    const channel = result.contents[1].video.author.title;
    const channelIcon = result.contents[1].video.author.avatar[0].url;
    previsualVideo(idVideo, titleVideo, channel, channelIcon);
    fetchDescription(idVideo);
    fetchComments(idVideo);
    fetchRelated(idVideo);
    setTimeout(() => {
      document.querySelector(".inicio").style.display = "none";
    }, 4000);
  } catch (error) {
    console.error(error);
  }
}
