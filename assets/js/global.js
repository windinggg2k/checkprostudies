$( document ).ready(function() {
    // alert( "document loaded" );


    function PageRedirect(url)
    {
        $(location).attr('href',url);
    }

    function SetUser(key,value)
    {
        localStorage.setItem(key,value);
    }
  
    /* Login check */
    $("#btSignin").click(function(){
        var iuser=$("#fusername").val().toLowerCase();
        var ipass=$("#fpassword").val().toLowerCase();

        $.getJSON("assets/js/dataUser.json",
        function (data) {
            var person = '';  
            var existUser=false;

            $.each(data, function (key, value) {     
                let uid= value.userid;
                let uname=value.username.toLowerCase();
                let upass=value.password.toLowerCase();
                let ufullname=value.fullname.toLowerCase();
                let urole=value.role.toLowerCase();
                let uchildren=value.children.toLowerCase();

                if((iuser==uname) && (ipass==upass))
                {
                    existUser=true;
                    SetUser("uid", uid);
                    SetUser("uname", uname);
                    SetUser("ufullname", ufullname);
                    SetUser("urole", urole);
                    SetUser("uchildren", uchildren);

                    switch(urole) {
                        case "admin":
                          PageRedirect("admin.html")
                          break;
                        case "teacher":
                          PageRedirect("teacher.html")
                          break;
                        case "parent":
                          PageRedirect("parent.html")
                          break;
                        case "student":
                          PageRedirect("student.html")
                          break;
                        default:
                          PageRedirect("permissiondeny.html")
                      }
                }
            });    
            
            if(!existUser)
            {
                alert("Login faild"+'\n'+'Vui l??ng ki???m tra l???i th??ng tin ????ng nh???p');
            }
            
        });
    }); 


});

$( window ).load(function() {
    // alert( "window loaded" );
    // change language
    let arrLang = {
        en: {
            'document': 'DOCUMENT',
            'support': 'SUPPORT',
            'khac': 'OTHER',
            'giaovu': 'Teacher',
            'phuhuynh': 'Parents',
            'info': 'Page info',
            'thoat': 'sign out',
            'center': 'CENTER',
            'about': 'About us',
            'blog': 'Blogs',
            'job': 'Jobs',
            'partners': 'Partners',
            'userrv': 'User reviews',
            'program': 'PROGRAM',
            'course': 'Course',
            'standard': 'Standard',
            'giaoduc': 'EDUCATION',
            'teacher': 'Teachers',
            'parents': 'Parents',
            'ambassador': 'Ambassador',
            'webinars': 'Webinars',
            'competition': 'Competition',
            'HelpCenter': 'Help Center',
            'ContactUs': 'Contact Us',
            'plan': 'PLAN',
            'teacherplan': 'Teacher Plans',
            'parentplan': 'Parent Plans',
            'give': 'Give a gift',
            'sumenh': 'MISSION',
            'truycap': 'Access times: 512',
            'sp': 'Support',
            'p': 'Codeandme is a top coding program for kids. Through award-winning courses, millions of students learn to code in real-life programming languages. Codeandme offers an engaging and fun curriculum for schools, clubs and after-school camps, as well as self-paced online courses to learn coding at home.'
        },
        vi: {
            'document': 'T??I LI???U',
            'support': 'H??? TR???',
            'khac': 'KH??C',
            'giaovu': 'Gi??o v???',
            'phuhuynh': 'Ph??? huynh',
            'info': 'Th??ng tin trang',
            'thoat': 'Tho??t',
            'center': 'TRUNG T??M',
            'about': 'V??? ch??ng t??i',
            'blog': 'Blog',
            'job': 'C??ng vi???c',
            'partners': '?????i t??c',
            'userrv': '????nh gi?? ng?????i d??ng',
            'program': 'CH????NG TR??NH',
            'course': 'Kh??a h???c',
            'standard': 'Ti??u chu???n',
            'giaoduc': 'GI??O D???C',
            'teacher': 'Gi??o vi??n',
            'parents': 'Ph??? huynh',
            'ambassador': '?????i s???',
            'webinars': 'H???i th???o',
            'competition': 'Cu???c thi',
            'HelpCenter': 'Trung t??m tr??? gi??p',
            'ContactUs': 'Li??n h??? v???i ch??ng t??i',
            'plan': 'K??? HO???CH',
            'teacherplan': 'D??nh cho gi??o vi??n',
            'parentplan': 'D??nh cho ph??? huynh',
            'give': 'T???ng qu??',
            'sumenh': 'S??? M???NH',
            'truycap': 'L?????t truy c???p: 512',
            'sp': 'H??? tr???',
            'p': 'Codeandme l?? m???t ch????ng tr??nh m?? h??a h??ng ?????u cho tr??? em. Th??ng qua c??c kh??a h???c t???ng ??o???t gi???i th?????ng, h??ng tri???u sinh vi??n h???c c??ch vi???t m?? b???ng c??c ng??n ng??? l???p tr??nh th???c t???. Codeandme cung c???p m???t ch????ng tr??nh gi???ng d???y h???p d???n v?? th?? v??? cho c??c tr?????ng h???c, c??u l???c b??? v?? tr???i sau gi??? h???c c??ng nh?? c??c kh??a h???c tr???c tuy???n theo nh???p ????? t??? h???c ????? h???c l???p tr??nh t???i nh??.'
        }
    }

    function isEmpty(value) {
        return (
            (value == null) ||
            (value.hasOwnProperty('length') && value.length === 0) ||
            (value.constructor === Object && Object.keys(value).length === 0)
        )
    }

    let lang = localStorage.getItem('language');
    if (!isEmpty(lang)) {
        changeLanguage(lang);
    }

    // translate
    $('.translate').click(function () {
        lang = $(this).attr('id');
        localStorage.setItem('language', lang);
        changeLanguage(lang);
    });

    // change language
    function changeLanguage(lang) {
        $('.lang').each(function (index, element) {
            // console.log(this);
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    }
});