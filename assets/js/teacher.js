$(window).load(function () {
    // alert( "window loaded" );
    // getChildrent();
    // function getChildrent(){



    //     $.getJSON("assets/js/dataUser.json",
    //     function (data) {
    //         var student = '';  
    //         var arr = localStorage.getItem("uchildren");

    //         $.each(data, function (key, value) {    


    //                 for(var i=0;i<arr.length;i++)
    //                     {

    //                         if(arr[i]==value.userid) 
    //                         {
    //                             var x1=`<li id="Name-student" class="nav-item">
    //                             <a class="text-dark nav-link" id="profile-tab" data-toggle="tab" href="#Childrent2" role="tab"
    //                                 aria-controls="profile" aria-selected="false">${value.fullname}</a>
    //                             </li>`

    //                             $('#myTab').append(x1);


    //                         }
    //                     }

    //         });                          

    //         $('#table').empty();
    //         $('#table').append(student);
    //     });
    // }

    // reaa json
    $.getJSON("assets/js/dataTeacherJson/dataClass.json",
        function (data) {
            var student = '';

            student += '<table class="table table-striped table-hover">';
            student += '<tr>';
            student += '<th scope="col">' + 'STT' + '</th>';
            student += '<th scope="col">' + 'Kỳ học' + '</th>';
            student += '<th scope="col">' + 'Lớp' + '</th>';
            student += '<th scope="col">' + 'Thời gian bắt đầu' + '</th>';
            student += '<th scope="col">' + 'Môn' + '</th>';
            student += '<th scope="col">' + 'Số buổi' + '</th>';
            student += '<th scope="col">' + 'Thời gian kết thúc' + '</th>';
            student += '<th scope="col">' + 'Giáo vụ' + '</th>';
            student += '<th scope="col">' + 'Liên hệ' + '</th>';
            student += '</tr>';
            $.each(data, function (key, value) {
                student += '<tr>';
                student += '<td scope="row">' + value.classid + '</td>';
                student += '<td>' + value.semester + '</td>';
                student += '<td>' + '<a href="#">' + value.class + '</a>' + '</td>';
                student += '<td>' + value.timeStart + '</td>';
                student += '<td>' + value.subject + '</td>';
                student += '<td>' + value.sobuoi + '</td>';
                student += '<td>' + value.timeend + '</td>';
                student += '<td>' + value.giaovu + '</td>';
                student += '<td>' + '<i class="mr-2 bi bi-telephone-forward"></i>' + '<a class="text-dark" href="tel:+' + value.sdt + '">' + value.sdt + '</a>' + '</td>';
                student += '</tr>';
            });
            student += '</table>';

            $('#tbl-manager').empty();
            $('#tbl-manager').append(student);
        });

    // reaa json
    $.getJSON("assets/js/dataTeacherJson/dataResources.json",
        function (data) {
            var student = '';

            student += '<table class="table table-striped table-hover">';
            student += '<tr>';
            student += '<th scope="col">' + 'STT' + '</th>';
            student += '<th scope="col">' + 'Kỳ học' + '</th>';
            student += '<th scope="col">' + 'Lớp' + '</th>';
            student += '<th scope="col">' + 'Link' + '</th>';
            student += '<th scope="col">' + 'Môn' + '</th>';
            student += '<th scope="col">' + 'Loại' + '</th>';
            student += '<th scope="col">' + 'Nguồn' + '</th>';
            student += '</tr>';
            $.each(data, function (key, value) {
                student += '<tr>';
                student += '<td scope="row">' + value.resourcesId + '</td>';
                student += '<td>' + value.semester + '</td>';
                student += '<td>' + value.class + '</td>';
                student += '<td>' + value.link + '</td>';
                student += '<td>' + value.subject + '</td>';
                student += '<td>' + value.loai + '</td>';
                student += '<td>' + value.nguon + '</td>';
                student += '</tr>';
            });
            student += '</table>';

            $('#tbl-tainguyen').empty();
            $('#tbl-tainguyen').append(student);
        });

    // reaa json
    $.getJSON("assets/js/dataTeacherJson/dataMarkStudent.json",
        function (data) {
            var student = '';

            student += '<table class="table table-striped table-hover">';
            student += '<tr>';
            student += '<th scope="col">' + 'STT' + '</th>';
            student += '<th scope="col">' + 'Tên' + '</th>';
            student += '<th scope="col">' + 'Lớp' + '</th>';
            student += '<th scope="col">' + 'Điểm' + '</th>';
            student += '<th scope="col">' + 'Môn' + '</th>';
            student += '<th scope="col">' + 'Lịch sử học tập' + '</th>';
            student += '</tr>';
            $.each(data, function (key, value) {
                student += '<tr>';
                student += '<td scope="row">' + value.markId + '</td>';
                student += '<td>' + value.name + '</td>';
                student += '<td>' + value.class + '</td>';
                student += '<td>' + value.mark + '</td>';
                student += '<td>' + value.subject + '</td>';
                student += '<td>' + '<a href="#">Xem</a>' + '</td>';
                student += '</tr>';
            });
            student += '</table>';

            $('#tbl-diemsv').empty();
            $('#tbl-diemsv').append(student);
        });
});