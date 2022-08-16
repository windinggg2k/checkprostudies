// $(document).ready(function(){
//     $('.main').height($(window).height());
// })

// hover model chi tiết
// $(function() {

//     $('[data-toggle="chitiet"]').hover(function() {
//       var modalId = $(this).data('target');
//       $(modalId).modal('show');

//     });

// });

$(document).ready(function() {
	var $navbar = $('.navbar');
  $('.client-link').click(function() {
  	if (!$navbar.hasClass("active")) {
    	$navbar.fadeIn("slow").addClass("active");
    }
    else {
    	$navbar.fadeOut("slow").removeClass("active");
    }
  });
});


// kiểm tra lỗi textbox trống
$("#myform").submit(function (e) {
    alert('hi');
    e.preventDefault();

    $('.checkerror').each(function () {
        if ($(this).val() == '' || $(this).val() == null) {
            $(this).addClass("errorTextbox");
        }
        else {
            $(this).removeClass("errorTextbox");
        }
    });
});


// dòng chữ chạy cuối footer
function reverseGeocode(data) {
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    // var myv;
    let apikey = "da6038173a284535903133ed10a758e8";

    fetch('https://api.opencagedata.com/geocode/v1/json'
        + '?'
        + 'key=' + apikey
        + '&q=' + encodeURIComponent(latitude + ',' + longitude)
        + '&pretty=1'
        + '&no_annotations=1')
        .then((response) => response.json())
        .then(
            (data) => {
                console.log(data)
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                if (data.results[1] == undefined) {
                    document.querySelector(".ticker").innerHTML = time + '/' + date + '/' + data.results[0].formatted
                } else {
                    document.querySelector(".ticker").innerHTML = time + ' ' + data.results[1].formatted + data.results[0].formatted
                }
            }
        )
}


// js tot top
var totop = $('#totop');
totop.click(function () {
    $('html, body').stop(true, true).animate({ scrollTop: 0 }, 1000);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        totop.fadeIn();
    } else {
        totop.fadeOut();
    }
});

function outLogin(){
    localStorage.clear();
    location.href="index.html"
}

// check show menu
$(window).load(function () {
    // alert('hi');

    function checkRole() {
        var role = localStorage.getItem("urole");
        var teacher = document.querySelector('#menu-teacher');
        var sv = document.querySelector('#menu-sinhvien');
        var pr = document.querySelector('#menu-phuhuynh');
        var ad = document.querySelector('#menu-admin');

        switch (role) {
            case 'teacher':
                $(teacher).removeClass("d-none");
                break;
            case 'student':
                $(sv).removeClass("d-none");
                break;
            case 'parent':
                $(pr).removeClass("d-none");
                break;
            case 'admin':
                $(ad).removeClass("d-none");
        }
    }

    checkRole();

    // đọc local in ra ufulname và urole
    let name = localStorage.getItem("ufullname");
    document.getElementById("ufullname").innerHTML = '( ' + name + ')' + ' - ';
    let role = localStorage.getItem("urole");
    document.getElementById("urole").innerHTML = '( ' + 'vai trò:' + ' ' + role + ')';
});


// Ticker
function reverseGeocode(data) {
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    // var myv;
    let apikey = "da6038173a284535903133ed10a758e8";

    fetch('https://api.opencagedata.com/geocode/v1/json'
        + '?'
        + 'key=' + apikey
        + '&q=' + encodeURIComponent(latitude + ',' + longitude)
        + '&pretty=1'
        + '&no_annotations=1')
        .then((response) => response.json())
        .then(
            (data) => {
                console.log(data)
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                if (data.results[1] == undefined) {
                    document.querySelector(".ticker").innerHTML = time + '/' + date + '/' + data.results[0].formatted + ' ' + 'Codeandme là một chương trình mã hóa hàng đầu cho trẻ em. Thông qua các khóa học từng đoạt giải thưởng, hàng triệu sinh viên học cách viết mã bằng các ngôn ngữ lập trình thực tế. Codeandme cung cấp một chương trình giảng dạy hấp dẫn và thú vị cho các trường học'
                } else {
                    document.querySelector(".ticker").innerHTML = time + ' ' + data.results[1].formatted + data.results[0].formatted
                }
            }
        )
}



if (navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(reverseGeocode, console.error);
}