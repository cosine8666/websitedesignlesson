// 宣告教授清單
let teachersListObj = {};

teachersListObj["Hsin_I_Chang"] = {
    name: "張心怡",
    img_path: "./source/teachers/profhchang.png",
    // img_path:"./facebookicon.png",
    degree: "澳洲雪梨大學 藥學 博士",
    lab: "組織工程與藥物傳遞應用研究室"
}

teachersListObj["Ruey_Shyang_Chen"] = {
    name: "陳瑞祥",
    img_path: "./source/teachers/profrechen.png",
    degree: "美國德州農工大學 植物病理與微生物學 博士",
    lab: "植物病理與微生物研究室"
}

teachersListObj["Cheng_Nan_Chen"] = {
    name: "陳政男",
    img_path: "./source/teachers/profcnchen.png",
    degree: "國防醫學院 生命科學研究所 博士",
    lab: "生醫工程實驗室"
}

teachersListObj["liaohf"] = {
    name: "廖慧芬",
    img_path: "./source/teachers/profliaohf.png",
    degree: "國立陽明大學傳統醫藥研究所博士",
    lab: "腫瘤生物學研究室"
}

teachersListObj["linyw"] = {
    name: "林芸薇",
    img_path: "./source/teachers/proflinyw.png",
    degree: "國立清華大學生命科學系博士",
    lab: "分子癌病學研究室"
}

teachersListObj["gjsu"] = {
    name: "蘇建國",
    img_path: "./source/teachers/profjgjsu.png",
    degree: "基因與生物醫學研究室",
    lab: "生命科學館 A25-106 室"
}

teachersListObj["peterong"] = {
    name: "翁秉霖",
    img_path: "./source/teachers/profpeterong.png",
    degree: "美國匹茲堡大學生物科學系結構生物組。博士學位。",
    lab: "蛋白質結構與功能實驗室"
}

teachersListObj["jcc"] = {
    name: "陳瑞傑",
    img_path: "./source/teachers/profjcc.png",
    degree: "臺灣大學醫學院生物化學暨分子生物學研究所",
    lab: "基因體暨蛋白質體研究實驗室"
}

teachersListObj["carriewei"] = {
    name: "魏佳俐",
    img_path: "./source/teachers/profcarriewei.png",
    degree: "國立陽明大學生物化學研究所博士",
    lab: "應用生物科技研究室",
}

teachersListObj["liawcc"] = {
    name: "廖家慶",
    img_path: "./source/teachers/profliawcc.png",
    degree: "國立中山大學 海洋生物科技暨資源學系 博士",
    lab: "",
}

teachersListObj["sec"] = {
    name: "黃裕之(秘書)",
    img_path: "./source/teachers/biotech.png",
    degree: "",
    lab: "",
}

teachersListObj["tfwang"] = {
    name: "王廷方",
    img_path: "./source/teachers/proftfwang.png",
    degree: "美國哈佛大學分子生物研究所博士",
    lab: "",
}

teachersListObj["hsiao"] = {
    name: "蕭傳鐙",
    img_path: "./source/teachers/profhsiao.png",
    degree: "美國匹茲堡大學晶體學系博士",
    lab: "",
}

teachersListObj["lychen"] = {
    name: "陳律佑",
    img_path: "./source/teachers/proflychen.png",
    degree: "中央研究院分子生物研究所副研究員",
    lab: "",
}

teachersListObj["leoleng"] = {
    name: "冷治湘",
    img_path: "./source/teachers/profleoleng.png",
    degree: "國防醫學院生命學研究所博士",
    lab: "",
}

// 建立教授頁面圖片與文字
function setTeacherIntroInfo(name) {
    let data = teachersListObj[name]
    let imageContainerObj = document.getElementById("teacher-intro-img")
    let textObj = document.getElementById("teacher-intro-text")
    let imgObj = document.createElement("img")
    let h2Obj = document.createElement("h2")

    // 清空舊內容
    imageContainerObj.innerHTML = "";
    textObj.innerHTML = "";
    // 設置圖片
    imgObj.src = data.img_path
    imgObj.classList.add("wow")
    imgObj.classList.add("fadeInLeft")
    imageContainerObj.appendChild(imgObj)
    // 設置文字
    h2Obj.innerHTML = data.name+"<br/><br/>";
    h2Obj.classList.add("wow")
    h2Obj.classList.add("fadeInDown")
    textObj.appendChild(h2Obj);
    //如果有寫學歷的話
    if (data.degree != "") {
        let spanObj = document.createElement("span")
        spanObj.innerHTML = "最高學歷:<br/>" + data.degree + "<br/><br/>";
        spanObj.classList.add("wow")
        spanObj.classList.add("fadeIn")
        textObj.appendChild(spanObj);
    }
    //如果有研究室的話
    if (data.lab != "") {
        spanObj = document.createElement("span")
        spanObj.innerHTML = "研究室:<br/>" + data.lab + "<br/><br/>";
        spanObj.classList.add("wow")
        spanObj.classList.add("fadeIn")
        textObj.appendChild(spanObj);
    }
}

// 設置按鈕事件監聽器
function setButtonEventListener(button_id) {
    let actionObj = () => {
        setTeacherIntroInfo(button_id);
    }
    document.getElementById(button_id).addEventListener("click", actionObj, false);
}

// 主函數 ，圖片css,js都載入後，自動執行一次。
window.onload = function () {
    // 取得所有老師清單
    let teacherNameList = Object.keys(teachersListObj)
    // 未點擊前顯示系主任
    setTeacherIntroInfo(teacherNameList[0])
    // 輪流依序選擇所有老師的名稱id
    teacherNameList.forEach(function (key) {
        // 給每個老師的按鈕，加上點擊之後的事件反應(更換圖片)
        setButtonEventListener(key)
    })

}