// 匯入 style.css 顏色 CSS 變數，組成 colors 物件
const colorVars = [
  'Green500',
  'VeryDarkGrayishBlue',
  'DesaturatedDarkBlue',
  'GrayishBlue',
  'LightGrayishBlue',
  'White'
];
const rootStyles = getComputedStyle(document.documentElement);
const colors = {};
colorVars.forEach(name => {
  colors[name] = rootStyles.getPropertyValue(`--${name}`).trim();
});
// 用法：colors.VeryDarkGrayishBlue

const sharebtn = document.getElementById("sharebtn");
const sharetriangle = document.getElementById("sharetriangle");
const shareboxPanel = document.getElementById("shareboxpanel");
const shareboxPopup = document.getElementById("shareboxpopup");
const textcontent = document.getElementById("textcontent");

document.getElementById("sharebtn").onclick = ShowShareBox;

function ShowShareBox() {
  const isMobile = window.matchMedia("(max-width: 1200px)").matches;

  if (isMobile) {
    // 展開 panel
    if (shareboxPanel.style.display === "flex") {
      shareboxPanel.style.display = "none";
      sharebtn.style.backgroundColor = colors.LightGrayishBlue;
      sharebtn.style.backgroundImage = "url('images/icon-share.svg')";
      sharebtn.style.zIndex = "0";
      textcontent.style.paddingBottom = "30px";
    } else {
      shareboxPanel.style.display = "flex";
      shareboxPopup.style.display = "none";
      sharebtn.style.backgroundColor = colors.DesaturatedDarkBlue;
      sharebtn.style.backgroundImage = "url('images/icon-share_white.svg')";
      sharebtn.style.zIndex = "2";
      textcontent.style.paddingBottom = "15px";
    }

  } else {
    // 展開 popup
    if (shareboxPopup.style.display === "flex") {
      shareboxPopup.style.display = "none";
      sharetriangle.style.display = "none";
      sharebtn.style.backgroundColor = colors.LightGrayishBlue;
      sharebtn.style.backgroundImage = "url('images/icon-share.svg')";
    } else {
      shareboxPopup.style.display = "flex";
      shareboxPanel.style.display = "none";
      sharetriangle.style.display = "block";
      sharebtn.style.backgroundColor = colors.DesaturatedDarkBlue;
      sharebtn.style.backgroundImage = "url('images/icon-share_white.svg')";  
    }
  }
}