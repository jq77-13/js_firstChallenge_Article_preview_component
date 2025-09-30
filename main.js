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
const sharebox = document.getElementById("sharebox");
const sharetriangle = document.getElementById("sharetriangle");

document.getElementById("sharebtn").onclick = ShowShareBox;

function ShowShareBox() {
  if (sharebox.style.display === "none" || sharebox.style.display === "") {
    sharebox.style.display = "flex"; // 或 "block"，依你的 CSS 設定
    sharetriangle.style.display = "block";
    sharebtn.style.backgroundColor = colors.DesaturatedDarkBlue;
    sharebtn.style.backgroundImage = "url('images/icon-share_white.svg')";
  } else {
    sharebox.style.display = "none";
    sharetriangle.style.display = "none";
    sharebtn.style.backgroundColor = colors.LightGrayishBlue;
    sharebtn.style.backgroundImage = "url('images/icon-share.svg')";
  }
}