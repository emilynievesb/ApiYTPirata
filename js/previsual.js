export function previsualVideo(idVideo, titleVideo, channel, channelIcon) {
  let videoBox = document.getElementById("box-video");
  let titleBox = document.getElementById("title-box");
  let channelBox = document.getElementById("channel-name");
  let iconBox = document.getElementById("icon-channel");

  let iframe = `<iframe id="iframe" width="560" height="250" src="https://www.youtube.com/embed/${idVideo}" title="YouTube video player" 
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen></iframe>`;
  let title = `<h4>${titleVideo}</h4>`;
  let icon = `<img src="${channelIcon}" alt="">`;
  let channelName = `<h3>${channel}</h3>`;

  videoBox.innerHTML = iframe;
  titleBox.innerHTML = title;
  channelBox.innerHTML = channelName;
  iconBox.innerHTML = icon;
}
