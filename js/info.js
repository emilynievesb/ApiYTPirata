export function videoDescription(descriptionVideo) {
  const descriptionBox = document.getElementById("description-video");
  let description = `<h4>Descripción:</h4><p>${descriptionVideo}</p>`;

  descriptionBox.innerHTML = description;
}
export function videoComments(comments) {
  const commentsBox = document.getElementById("comments-video");

  let str = "<h4>Comentarios:</h4>";

  for (let i = 0; i < comments.length; i++) {
    str += `<p><b>${comments[i].author.title}:  </b> ${comments[i].content}</p><br />`;
  }

  commentsBox.innerHTML = str;
}

export function videoRealted(related) {
  const relatedBox = document.getElementById("related-video");

  let str = "";

  for (let i = 0; i < related.length; i++) {
    if (related[i].type === "video") {
      str += `<iframe id="related"  height="90%" src="https://www.youtube.com/embed/${related[i].video.videoId}" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>`;
    }
  }

  relatedBox.innerHTML = str;
}
