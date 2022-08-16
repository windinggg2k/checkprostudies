


//   //Check thông tin điểm học viên
//   $( window ).load(function() {
//     alert( "window loaded" );


//         $.getJSON("JS/dataStudentMark.json", 
//         function (data) {
//             var student = '';  

//             $.each(data, function (key, value) {                                                        
//                 student += '<tr>';
//                     student += '<td>' + value.userid + '</td>';  
//                     student += '<td>' + value.class + '</td>'; 
//                     student += '<td>';

//                     $.each(value.courses , function(k , v ){  
//                         console.log(v);
//                         student += '<table style="background-color:yellow">';
//                         student +='<tr>'
//                             student +='<td>' + v.courseid + '</td>';
//                             student +='<td>' + v.name + '</td>';
//                             student +='<td>' + v.mark + '</td>';
//                             student +='<td>' + v.examdate + '</td>';
//                         student +='</tr>';
//                         student +='</table>';
//                     });



//                     student +='</td>';                                 
//                 student += '</tr>';
//             });                          

//             $('#Form-info').empty();
//             $('#Form-info').append(student);
//         });


// });

$(window).load(function () {
    getChildrent();
    function getChildrent() {


        // reaa json
        $.getJSON("assets/js/dataUser.json",
            function (data) {
                var student = '';
                var arr = localStorage.getItem("uchildren");

                $.each(data, function (key, value) {


                    for (var i = 0; i < arr.length; i++) {

                        if (arr[i] == value.userid) {
                            var x1 = `<li id="Name-student" class="nav-item">
                                <a class="nav-link text-success" id="profile-tab" data-toggle="tab" href="#Childrent2" role="tab"
                                    aria-controls="profile" aria-selected="false">${value.fullname}</a>
                                </li>`

                            $('#myTab').append(x1);
                        }
                    }

                });

                $('#table').empty();
                $('#table').append(student);
            });
    }

    // reaa json
    $.getJSON("assets/js/parentJSON/dataStudentMark_parent.json",
        function (data) {
            var student = '';


            student += '<table class="table table-striped table-hover">';
            student += '<tr>';
            student += '<th scope="col">' + 'STT' + '</th>';
            student += '<th scope="col">' + 'Kỳ học' + '</th>';
            student += '<th scope="col">' + 'Môn học' + '</th>';
            student += '<th scope="col">' + 'Giảng viên' + '</th>';
            student += '<th scope="col">' + 'Thời gian bắt đầu' + '</th>';
            student += '<th scope="col">' + 'Thời gian kết thúc' + '</th>';
            student += '<th scope="col">' + 'Phản hồi của con' + '</th>';
            student += '<th scope="col">' + 'Phản hồi của tôi' + '</th>';
            student += '<th scope="col">' + 'Gửi phản hồi' + '</th>';
            student += '<th scope="col">' + 'Điểm' + '</th>';
            student += '<th scope="col">' + 'Trạng thái' + '</th>';
            student += '</tr>';
            $.each(data, function (key, value) {
                student += '<tr>';
                student += '<td scope="row">' + value.ID + '</td>';
                student += '<td>' + value.kyhoc + '</td>';
                student += '<td>' + '<a href="" data-target="#Form-subject_html" data-toggle="modal">HTML</a>' + '</td>';
                student += '<td>' + value.giangvien + '</td>';
                student += '<td>' + value.thoigianbatdau + '</td>';
                student += '<td>' + value.thoigianketthuc + '</td>';
                student += '<td>' + '<a href="" data-target="#myModal" data-toggle="modal">Xem</a> ' + '</td>';
                student += '<td>' + ' <a href="" data-target="#myModal" data-toggle="modal">Xem</a> ' + '</td>';
                student += '<td>' + '<a href="" data-target="#modal-feedback" data-toggle="modal">' + '<i class="bi bi-vector-pen"></i>' + ' </a>' + '</td>';
                student += '<td>' + value.diem + '</td>';
                student += '<td>' + value.trangthai + '</td>';
                student += '</tr>';
            });
            student += '</table>';

            $('#Form-info_parent').empty();
            $('#Form-info_parent').append(student);
        });

    // reaa json    
    $.getJSON("assets/js/parentJSON/dataStudentMark_parent.json",
        function (data) {
            var student = '';

            student += '<table class="table table-striped table-hover">';
            student += '<tr>';
            student += '<th scope="col">' + 'STT' + '</th>';
            student += '<th scope="col">' + 'Kỳ học' + '</th>';
            student += '<th scope="col">' + 'Môn học' + '</th>';
            student += '<th scope="col">' + 'Giảng viên' + '</th>';
            student += '<th scope="col">' + 'Thời gian bắt đầu' + '</th>';
            student += '<th scope="col">' + 'Thời gian kết thúc' + '</th>';
            student += '<th scope="col">' + 'Phản hồi sinh viên' + '</th>';
            student += '<th scope="col">' + 'Phản hồi phụ huynh' + '</th>';
            student += '<th scope="col">' + 'Gửi phản hồi' + '</th>';
            student += '<th scope="col">' + 'Điểm' + '</th>';
            student += '<th scope="col">' + 'Trạng thái' + '</th>';
            student += '</tr>';
            $.each(data, function (key, value) {
                student += '<tr>';
                student += '<td scope="row">' + value.ID + '</td>';
                student += '<td>' + value.kyhoc + '</td>';
                student += '<td>' + '<a href="" data-target="#Form-subject_html" data-toggle="modal">HTML</a>' + '</td>';
                student += '<td>' + value.giangvien + '</td>';
                student += '<td>' + value.thoigianbatdau + '</td>';
                student += '<td>' + value.thoigianketthuc + '</td>';
                student += '<td>' + '<a href="" data-target="#myModal" data-toggle="modal">Xem</a> ' + '</td>';
                student += '<td>' + '  ' + '</td>';
                student += '<td>' + '<a href="" data-target="#modal-feedback" data-toggle="modal">' + '<i class="bi bi-vector-pen"></i>' + ' </a>' + '</td>';
                student += '<td>' + value.diem + '</td>';
                student += '<td>' + value.trangthai + '</td>';
                student += '</tr>';
            });
            student += '</table>';

            $('#Form-info_parent1').empty();
            $('#Form-info_parent1').append(student);
        });


});
