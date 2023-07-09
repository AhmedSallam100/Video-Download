let downloadVideoBtn = document.querySelector(".download-video");
let urlInput = document.querySelector(".url-input");
let downloadthumBtn = document.querySelector(".download-thumbnail");
let imgs = document.querySelectorAll(".img-container img");
let output = document.querySelector(".img-cont");

downloadVideoBtn.addEventListener("click", () => {
  if (urlInput.value === "") {
    alert("Please enter a correct URL!");
  } else {
    console.log(`URL: ${urlInput.value}`);
    sendURL(urlInput.value);
  }
});

let sendURL = (URL) => {
  fetch(`https://ahmedsallam100.github.io/Video-Download/index.html?URL=${URL}`)
    .then((response) => {
      if (response.ok) {
        // تم الحصول على البيانات بنجاح، يمكن القيام بالإجراء المناسب
        console.log("تم الحصول على البيانات بنجاح!");
      } else {
        // حدث خطأ أثناء الحصول على البيانات
        console.log("حدث خطأ أثناء الحصول على البيانات!");
      }
    })
    .catch((error) => {
      // حدث خطأ أثناء الاتصال بالخادم
      console.log(`حدث خطأ أثناء الاتصال بالخادم: ${error}`);
    });
};

downloadthumBtn.addEventListener("click", () => {
  var query = urlInput.value;
  if (query === "") {
    alert("Please enter a correct URL!");
  } else {
    if (query.includes("v=")) {
      var linkRemoved = query.split("v=");
      var id = linkRemoved[1].split("&")[0];
    } else {
      var linkRemoved = query.split("/");
      var id = linkRemoved[3];
    }
    if (id) {
      for (var i = 0; i <= 3; i++) {
        imgs[i].src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
      }
      output.style.display = "flex";
      output.caption = id;
      if (output.style.display === "flex") {
        document.querySelector(".container").classList.add("active");
      }
    }
  }
});

var preview = (v) => {
  var id = document.querySelector(".img-cont").caption;
  var a = document.createElement("a");
  a.target = "_blank";
  if (v === 1) {
    a.href = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  } else if (v === 2) {
    a.href = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  } else if (v === 3) {
    a.href = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  } else if (v === 4) {
    a.href = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }
  a.click();
};
