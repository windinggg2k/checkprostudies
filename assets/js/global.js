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
                alert("Login faild"+'\n'+'Vui lòng kiểm tra lại thông tin đăng nhập');
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
            'document': 'TÀI LIỆU',
            'support': 'HỖ TRỢ',
            'khac': 'KHÁC',
            'giaovu': 'Giáo vụ',
            'phuhuynh': 'Phụ huynh',
            'info': 'Thông tin trang',
            'thoat': 'Thoát',
            'center': 'TRUNG TÂM',
            'about': 'Về chúng tôi',
            'blog': 'Blog',
            'job': 'Công việc',
            'partners': 'Đối tác',
            'userrv': 'Đánh giá người dùng',
            'program': 'CHƯƠNG TRÌNH',
            'course': 'Khóa học',
            'standard': 'Tiêu chuẩn',
            'giaoduc': 'GIÁO DỤC',
            'teacher': 'Giáo viên',
            'parents': 'Phụ huynh',
            'ambassador': 'Đại sứ',
            'webinars': 'Hội thảo',
            'competition': 'Cuộc thi',
            'HelpCenter': 'Trung tâm trợ giúp',
            'ContactUs': 'Liên hệ với chúng tôi',
            'plan': 'KẾ HOẠCH',
            'teacherplan': 'Dành cho giáo viên',
            'parentplan': 'Dành cho phụ huynh',
            'give': 'Tặng quà',
            'sumenh': 'SỨ MỆNH',
            'truycap': 'Lượt truy cập: 512',
            'sp': 'Hỗ trợ',
            'p': 'Codeandme là một chương trình mã hóa hàng đầu cho trẻ em. Thông qua các khóa học từng đoạt giải thưởng, hàng triệu sinh viên học cách viết mã bằng các ngôn ngữ lập trình thực tế. Codeandme cung cấp một chương trình giảng dạy hấp dẫn và thú vị cho các trường học, câu lạc bộ và trại sau giờ học cũng như các khóa học trực tuyến theo nhịp độ tự học để học lập trình tại nhà.'
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